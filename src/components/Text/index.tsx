import React from 'react';

import { Container, TextStyleProps } from './styles';

export interface TextProps extends TextStyleProps {
  className?: string;
  forwardRef?: React.RefObject<HTMLDivElement>;
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  noSelect?: boolean;
}

const Text: React.FC<TextProps> = ({
  className,
  forwardRef,
  href,
  newTab,
  onClick,
  noSelect,
  inline,
  fontFamily,
  fontSize,
  color,
  children,
  enableColorTransition,
  underlined,
}) => {
  return (
    <Container
      className={`text${noSelect ? ' no-user-select' : ''}${
        className ? ` ${className}` : ''
      }`}
      inline={inline}
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      hasOnClick={!!onClick}
      enableColorTransition={enableColorTransition}
      underlined={underlined}
      ref={forwardRef}
    >
      {href ? (
        <a href={href} target={newTab ? '_blank' : '_self'} rel="noreferrer">
          {children}
        </a>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <span onClick={onClick}>{children}</span>
      )}
    </Container>
  );
};

export default Text;
