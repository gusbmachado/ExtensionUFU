import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '..';
import { ColorPallete } from '../../styles/global';

import { Container, InputStyleProps } from './styles';

export interface InputRefProps {
  setInputValue?: (value: string) => void;
  triggerSubmit?: () => void;
}

export interface InputProps extends InputStyleProps {
  forwardRef?: React.MutableRefObject<InputRefProps>;
  defaultValue?: string;
  placeholder?: string;
  password?: boolean;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  forwardRef,
  defaultValue = '',
  placeholder = '',
  disabled,
  password,
  autoFocus,
  error,
  onChange,
  onSubmit,
  width,
  height,
  backgroundColor,
}) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(defaultValue ?? '');
  const [capsLockEnabled, setCapsLockEnabled] = useState(false);
  useEffect(() => {
    if (forwardRef?.current) {
      // eslint-disable-next-line no-param-reassign
      forwardRef.current = {
        setInputValue,
        triggerSubmit: () => onSubmit?.(inputValue),
      };
    }
  }, [forwardRef, inputValue, onSubmit]);
  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);
  return (
    <Container
      className="input no-user-select"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      disabled={disabled}
      error={error}
    >
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
        value={inputValue}
        type={password ? 'password' : 'text'}
        onChange={evt => {
          setInputValue(evt.target.value);
          onChange?.(evt.target.value);
        }}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            onSubmit?.(inputValue);
          }
          setCapsLockEnabled(e.getModifierState('CapsLock'));
        }}
      />
      {(error || (password && capsLockEnabled)) && (
        // eslint-disable-next-line react/jsx-no-undef
        <Text
          fontSize="14px"
          color={
            error ? ColorPallete.SYSTEM_ORANGE : ColorPallete.MAIN_GRAY_DARK
          }
        >
          {error || t('general:capsLock')}
        </Text>
      )}
    </Container>
  );
};

export default Input;
