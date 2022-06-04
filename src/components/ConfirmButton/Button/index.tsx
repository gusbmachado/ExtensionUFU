import React, { useCallback, useState } from 'react';
import { useMounted } from '../../../hooks';
import { ButtonContainerProps, Container } from './styles';

export interface ButtonProps extends ButtonContainerProps {
  onClick?: (...args: unknown[]) => unknown;
  debounce?: number;
  children?: any;
}

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  color,
  backgroundColor,
  borderColor,
  borderWidth,
  shadow,
  fontSize,
  onClick,
  debounce,
  disabled,
  children,
}) => {
  const [debouncing, setDebouncing] = useState<NodeJS.Timeout | null>(null);
  const mounted = useMounted();

  const handleClick = useCallback(() => {
    if (debouncing || disabled) {
      return;
    }
    onClick?.();
    setDebouncing(
      setTimeout(() => {
        if (mounted) {
          setDebouncing(null);
        }
      }, debounce),
    );
  }, [debounce, debouncing, disabled, mounted, onClick]);

  return (
    <Container
      className="button no-user-select"
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      shadow={shadow}
      fontSize={fontSize}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Container>
  );
};

export default Button;
