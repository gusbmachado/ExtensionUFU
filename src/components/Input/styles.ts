import styled from 'styled-components';
import 'styles/global';

export interface InputStyleProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  disabled?: boolean;
  error?: string;
  hasError?: boolean;
}

export const Container = styled.div<InputStyleProps>`
  /* border: 1px solid red; */
  display: flex;
  width: ${({ width }) => width || '100%'};
  position: relative;

  flex-direction: column;

  input {
    background: var(--color-neutral-darker-alt);
    padding: 5px 5px 4px;
    border: 1px solid var(--color-neutral-darker-alt);
    color: var(--color-neutral-lighter);
    border-radius: 2px;
    outline: 0;
    font-family: Nunito, sans-serif;
    width: 100%;
    height: 61px;
    font-size: 24px;
    padding-left: 10px;
    padding-right: 10px;
    transition: border-color 0.2s;
    ${({ hasError }) => hasError && 'border-color: var(--color-system-orange)'}
  }
  input:focus {
    border-width: 3px;
    border-color: var(--color-neutral-darker);
  }
  .text {
    position: absolute;
    bottom: -20px;
  }
`;

export const ErrorContainer = styled.div`
  padding-left: 3px;
  padding-top: 3px;
`;
