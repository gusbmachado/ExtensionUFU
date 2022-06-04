import styled from 'styled-components';

interface ContainerProps {
  hasError?: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: ${({ hasError }) => (hasError ? '16px' : '35px')};
  input {
    background-color: var(--color-main-gray-light);
    width: 100%;
    height: 61px;
    border-radius: 4px;
    font-size: 24px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 2px 4px 16px 0px rgba(255, 255, 255, 0.15);
    transition: border-color 0.2s;
    ${({ hasError }) => hasError && 'border-color: var(--color-system-orange)'}
  }
  input:focus {
    border-width: 3px;
    border-color: var(--color-main-gray-light);
  }
`;

export const ErrorContainer = styled.div`
  padding-left: 3px;
  padding-top: 3px;
`;
