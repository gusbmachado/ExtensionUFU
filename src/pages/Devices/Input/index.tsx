import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useField } from '@unform/core';

import { Text } from 'components';
import { ColorPallete } from 'styles/global';

import { Container, ErrorContainer } from './styles';

export interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  onSubmit?: () => unknown;
}

const Input: React.FC<InputProps> = ({
  name,
  type = 'text',
  placeholder = '',
  onSubmit,
}) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);
  const [capsLockEnabled, setCapsLockEnabled] = useState(false);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => ref.current.value,
      setValue: (ref, value: string) => {
        // eslint-disable-next-line no-param-reassign
        ref.current.value = type === 'password' ? value : value.trim();
      },
      clearValue: ref => {
        // eslint-disable-next-line no-param-reassign
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField, type]);
  return (
    <Container hasError={!!error || capsLockEnabled}>
      <input
        ref={inputRef}
        spellCheck={false}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            onSubmit?.();
          }
          clearError();
          setCapsLockEnabled(
            type === 'password' && e.getModifierState('CapsLock'),
          );
        }}
      />
      {(error || capsLockEnabled) && (
        <ErrorContainer>
          <Text
            fontSize="14px"
            color={
              error ? ColorPallete.SYSTEM_ORANGE : ColorPallete.SYSTEM_PURPLE
            }
          >
            {error || t(`general:capsLock`)}
          </Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default Input;
