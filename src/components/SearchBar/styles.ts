import styled from 'styled-components';

export interface SearchStyleProps {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
}

export const Container = styled.div<SearchStyleProps>`
  /* border: 1px solid red; */
  display: flex;
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '38px'};
  top: ${({ top }) => top || '150px'};
  left: ${({ left }) => left || '50px'};
  position: absolute;
  input {
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-family: Nunito, sans-serif;
    border-radius: 4px;
    background-color: var(--color-neutral-darker-alt);
    color: var(--color-neutral-blank);
    border: none;
    padding-left: 8px;
    padding-right: 8px;
  }
  svg {
    color: var(--color-neutral-lighter);
    position: absolute;
    right: 7px;
    top: 12px;
  }
  input::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    cursor: pointer;
    background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 43%,
        var(--color-neutral-lighter) 45%,
        var(--color-neutral-lighter) 55%,
        rgba(0, 0, 0, 0) 57%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        135deg,
        var(--color-neutral-darker-alt) 0%,
        var(--color-neutral-darker-alt) 43%,
        var(--color-neutral-lighter) 45%,
        var(--color-neutral-lighter) 55%,
        var(--color-neutral-darker-alt) 57%,
        var(--color-neutral-darker-alt) 100%
      );
  }
`;
