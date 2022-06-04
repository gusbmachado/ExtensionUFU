import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { StyledSelect, Text } from 'components';
import Button from 'components/ConfirmButton/Button';
import { ColorPallete } from 'styles/global';
import { useAuth } from 'providers/Auth/AuthProvider';

import { motion } from 'framer-motion';
import { ButtonGoogleContainer } from 'pages/Login/styles';
import { IoLogoGoogle } from 'react-icons/io';
import Input from './Input';
import {
  Background,
  BottomContainer,
  CentralLogoContainer,
  Container,
  Line,
  SignUpFormContainer,
  LogoHeaderContainer,
  TopContainer,
  Form,
  ExtraInfo,
  FooterLinks,
  ButtonContainer,
} from './styles';

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const { getCredentials, setCredentials } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [shouldSpin, setShouldSpin] = useState(false);
  const [registering, setRegistering] = useState(false);
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({ key: '', password: '' });
  const [captchaToken, setHcaptchaToken] = useState('');

  const translate = useCallback(
    (key: string | { key: string; values: Record<string, unknown> }) => {
      if (typeof key === 'string') {
        return t(key);
      }
      return t(key.key, { ...key.values });
    },
    [t],
  );

  const handleFormSubmit = useCallback(
    async (formData: {
      email: string;
      password: string;
      repeatPassword: string;
      name: string;
      organization: string;
    }) => {
      if (!formRef?.current || registering) return;
      try {
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().min(8).required(),
          repeatPassword: Yup.string()
            .min(8)
            .required()
            .oneOf(
              [Yup.ref('password'), null],
              t('signUp:wrongRepeatPassword'),
            ),
          name: Yup.string().min(4).required(),
          organization: Yup.string().min(2).required(),
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
      setShouldSpin(true);
      setRegistering(true);

      const { email, password, name, organization } = formData;
    },
    [registering, captchaToken, t, translate],
  );

  const roles = [
    { value: '0', label: `${t('userRole_Producer')}` },
    { value: '1', label: `${t('userRole_Merchant')}` },
    { value: '2', label: `${t('userRole_Consumer')}` },
  ];

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

  const options = [
    {
      type: "role",
      options: [
        { value: '0', label: `${t('userRole_ADMIN')}`, type: "role" },
        { value: '1', label: `${t('userRole_MANAGER')}`, type: "role" },
        { value: '2', label: `${t('userRole_VIEWER')}`, type: "role" },
      ]
    }
  ];

  return (
    <Container>
      <div className="Users" />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
      <Background className="page-body" />
      <TopContainer className="page-body">
        <LogoHeaderContainer className="no-user-select" />
        <Line />
      </TopContainer>
      <BottomContainer className="page-body">
          <CentralLogoContainer className="no-user-select">
            <Text fontFamily="Nunito" fontSize="68px" color='var(--color-neutral-blank)'>
              Welcome Back!
            </Text>
            <Text fontFamily="Nunito" fontSize="24px" color='var(--color-neutral-blank)'>
              To keep connected with us plase login with your personal info
            </Text>
          </CentralLogoContainer>
        <SignUpFormContainer>
          <Text noSelect fontFamily="Nunito Bold" color='var(--color-main-green)' fontSize="36px">
            {t('signUp:signUp')}
          </Text>
          <Form ref={formRef} onSubmit={handleFormSubmit}>
          <ButtonGoogleContainer>
                <Button
                  fontSize="15px"
                  height="39px"
                  width="351px"
                  backgroundColor='#FF5842'
                  debounce={200}
                  shadow
                >
                  <IoLogoGoogle /> &ensp; Google
                </Button>
              </ButtonGoogleContainer>
              <div style={{marginBottom: "30px"}}>
                <Text noSelect fontFamily="Nunito Bold" color='var(--color-main-gray-dark)' fontSize="18px">
                  {t('login:opption')}
                </Text>
              </div>
          <Input
            name="nome"
            placeholder={t('login:name')}
            onSubmit={() => ''}
          />
          <Input
            name="email"
            placeholder={t('login:email')}
            onSubmit={() => ''}
          />
          <Input
            name="password"
            placeholder={t('login:password')}
            onSubmit={() => ''}
          />
          <StyledSelect options={roles} />
          <ButtonContainer>
              <Button
                fontSize="15px"
                height="39px"
                width="158px"
                backgroundColor='#1FCC79'
                debounce={200}
                shadow
              >
                {t('signUp:signUpButton')}
              </Button>
            </ButtonContainer>
          </Form>
          <ExtraInfo>
            <Text fontSize="20px" color='var(--color-main-gray-dark)'>
              {t('signUp:hasAccount')}{' '}
              <Text
                fontSize="20px"
                color='var(--color-main-gray-dark)'
                inline
                underlined
                onClick={() => history.push('/')}
                >
                {t('signUp:access')}
              </Text>
            </Text>
          </ExtraInfo>
          <FooterLinks>
            <Text />
          </FooterLinks>
        </SignUpFormContainer>
      </BottomContainer>
      </motion.div>
    </Container>
  );
};

export default SignUp;