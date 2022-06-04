import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '..';
import Button, { ButtonProps } from './Button';

import { Content } from './styles';

export interface ConfirmButtonProps extends ButtonProps {
  // eslint-disable-next-line react/no-unused-prop-types
  confirmContent?: React.ReactElement;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  width,
  height,
  color,
  backgroundColor,
  borderColor,
  borderWidth,
  shadow,
  fontSize,
  debounce = 300,
  disabled,
}) => {
  const { t } = useTranslation();

  return (
    <Button
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      shadow={shadow}
      fontSize={fontSize}
      debounce={debounce}
      disabled={disabled}
    >
      <Content>
        <Text fontSize="22px">{t('general:buttonConfirm')}</Text>
      </Content>
    </Button>
  );
};

export default ConfirmButton;
