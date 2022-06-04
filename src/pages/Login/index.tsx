import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { IoLogoGoogle } from 'react-icons/io';
import Button from 'components/ConfirmButton/Button';
import { Text } from '../../components';
import { useLocalStorage, LocalStorageKeys } from '../../hooks';
import Checkbox from '../../components/Checkbox';
import api, { AuthInfo } from '../../mockApi/api';
import { LicHttpResponse } from '../../mockApi/HttpResponse';
import { useAuth } from '../../providers/Auth/AuthProvider';
import {
  Background,
  BottomContainer,
  ButtonContainer,
  ButtonGoogleContainer,
  Container,
  ExtraInfo,
  FooterLinks,
  Form,
  IconViacast,
  Line,
  LoginFormContainer,
  LogoContainer,
  LogoHeaderContainer,
  TopContainer,
} from './styles';
import Input from './Input';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { t } = useTranslation();
  const { setCredentials } = useAuth();
  const history = useHistory();

  const [loggingIn, setLoggingIn] = useState(false);
  const [rememberMeValue, setRememberMeValue] = useLocalStorage(
    LocalStorageKeys.REMEMBER_ME,
    '', // email to remember
  );
  const [shouldRememberMe, setShouldRememberMe] = useState(!!rememberMeValue);

  useEffect(() => {
    if (!shouldRememberMe) {
      setRememberMeValue('');
    }
  }, [setRememberMeValue, shouldRememberMe]);

  const translate = useCallback(
    (key: string | { key: string; values: Record<string, unknown> }) => {
      if (typeof key === 'string') {
        return t(key);
      }
      return t(key.key, { ...key.values });
    },
    [t],
  );

  const validateLogin = useCallback(
    (r: LicHttpResponse<AuthInfo>) => {
      setLoggingIn(false);
      const { success, message, data } = r;
      if (!success) {
        formRef.current?.setErrors({
          email: message || t('general:somethingWentWrong'),
        });
        return;
      }
      setCredentials({
        token: data?.token || '',
        refreshToken: data?.refreshToken || '',
      });
      history.replace('/dashboard');
    },
    [history, setCredentials, t],
  );

  const handleFormSubmit = useCallback(
    async (formData: { email: string; password: string }) => {
      if (!formRef?.current || loggingIn) return;
      try {
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().min(8).required(),
        });
        await schema.validate(formData, {
          abortEarly: false,
        });
      } catch (err) {
        const validationErrors: Record<string, string> = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            if (!error.path) return;
            validationErrors[error.path] = translate(error.message);
          });
          formRef.current.setErrors(validationErrors);
        }
        return;
      }
      setRememberMeValue(shouldRememberMe ? formData.email : '');
      setLoggingIn(true);
      const { email, password } = formData;
      const r = await api.login(email, password);
      setLoggingIn(false);
      validateLogin(r);
    },
    [loggingIn, setRememberMeValue, shouldRememberMe, translate, validateLogin],
  );

  const triggerSubmit = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Container>
        <Background />
        <BottomContainer>
          <LoginFormContainer>
            <Text noSelect fontFamily="Nunito Bold" color='var(--color-main-green)' fontSize="36px">
              {t('login:access')}
            </Text>
            <Form
              ref={formRef}
              onSubmit={handleFormSubmit}
              initialData={{
                email: rememberMeValue,
              }}
            >
              <ButtonGoogleContainer>
                <Button
                  fontSize="15px"
                  height="39px"
                  width="351px"
                  backgroundColor='#FF5842'
                  onClick={triggerSubmit}
                  debounce={200}
                  disabled={loggingIn}
                  shadow
                >
                  <IoLogoGoogle /> &ensp; Google
                </Button>
              </ButtonGoogleContainer>
              <div style={{marginLeft: "20%", marginBottom: "30px"}}>
                <Text noSelect fontFamily="Nunito Bold" color='var(--color-main-gray-dark)' fontSize="18px">
                  {t('login:opption')}
                </Text>
              </div>
              <Input
                name="email"
                placeholder={t('login:email')}
                onSubmit={triggerSubmit}
              />
              <Input
                name="password"
                type="password"
                placeholder={t('login:password')}
                onSubmit={triggerSubmit}
              />
              <Checkbox
                label={t('login:rememberMe')}
                checked={shouldRememberMe}
                onChange={setShouldRememberMe}
              />
              <ButtonContainer>
                <Button
                  fontSize="15px"
                  height="39px"
                  width="158px"
                  backgroundColor='#1FCC79'
                  onClick={triggerSubmit}
                  debounce={200}
                  disabled={loggingIn}
                  shadow
                >
                  {t('login:accessButton')}
                </Button>
              </ButtonContainer>
            </Form>
            <FooterLinks>
              <ExtraInfo>
              <Text
                  fontSize="20px"
                  color='var(--color-main-gray-dark)'
                  underlined
                  onClick={() => history.push('/forgot-password')}
                >
                  {t('login:forgotPassword')}
                </Text>
                <Text fontSize="20px" color='var(--color-main-gray-dark)'>
                  {t('login:noAccount')}{' '}
                  <Text
                    fontSize="20px"
                    color="var(--color-main-gray-dark)"
                    inline
                    underlined
                    onClick={() => history.push('/register')}
                  >
                    {t('login:signUp')}
                  </Text>
                </Text>
              </ExtraInfo>
            </FooterLinks>
          </LoginFormContainer>
          <LogoContainer className="no-user-select">
            <Text fontFamily="Nunito" fontSize="68px" color='var(--color-neutral-blank)'>
              Hello Friend!
            </Text>
            <Text fontFamily="Nunito" fontSize="24px" color='var(--color-neutral-blank)'>
              Enter your personal details and start your journey with us
            </Text>
          </LogoContainer>
        </BottomContainer>
      </Container>
    </motion.div>
  );
};

export default Login;
