import styled, { css } from 'styled-components';
import { ColorPallete } from 'styles/global';
import { shade } from 'polished';

export interface ButtonContainerProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  disabled?: boolean;
  borderColor?: string;
  borderWidth?: string;
  shadow?: boolean;
}

export const Container = styled.div<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border-radius: 4px;

  ${({ borderColor }) =>
    borderColor &&
    css`
      border-color: ${borderColor};
      border-style: solid;
    `}
  ${({ borderWidth }) =>
    borderWidth &&
    css`
      border-width: ${borderWidth};
    `}

  color: ${({ color }) => color || ColorPallete.NEUTRAL_BLANK};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || ColorPallete.PRIMARY_DARK};
  font-size: ${({ fontSize }) => fontSize || '1em'};

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 2px 4px 10px 0px ${ColorPallete.PRIMARY_DARK}25;
    `}

  ${({ disabled, color, backgroundColor, borderColor }) => {
    if (disabled) {
      return css`
        filter: brightness(50%);
      `;
    }
    return css`
      &:hover {
        ${borderColor &&
        css`
          border-color: ${shade(0.2, borderColor)};
        `}
        color: ${shade(0.2, color || ColorPallete.NEUTRAL_BLANK)};
        background: ${shade(0.2, backgroundColor || ColorPallete.PRIMARY_DARK)};
        svg {
          color: ${shade(0.2, color || ColorPallete.NEUTRAL_BLANK)};
        }
        cursor: pointer;
      }
    `;
  }}
`;
