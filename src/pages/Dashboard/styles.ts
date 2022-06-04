import styled from 'styled-components';
import 'styles/global';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Filters = styled.div<{ left?: string }>`
  display: flex;
  flex: 1;
  position: absolute;
  z-index: 40;
  top: 150px;
  left: ${({ left }) => left || '360px'};
`;

export const Input = styled.input`
    cursor: pointer;
    user-select: none;
    background: var(--color-neutral-darker-alt);
    padding: 5px 5px 4px;
    border: 1px solid var(--color-neutral-darker);
    color: var(--color-neutral-lighter);
    border-radius: 2px;
    outline: 0;
    font-family: Nunito, sans-serif;
    width: 100%;
    height: 38px;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    transition: border-color 0.2s;
  :focus {
    border-width: 3px;
    border-color: var(--color-neutral-darker);
  }
`;

export const Detail = styled.details`
    cursor: pointer;
    user-select: none;
    background: var(--color-neutral-dark);
    padding: 5px 5px 4px;
    border: 1px solid var(--color-neutral-dark);
    color: var(--color-neutral-lighter);
    border-radius: 2px;
    outline: 0;
    font-family: Nunito, sans-serif;
    width: 325px;
    height: 38px;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
    transition: border-color 0.2s;

    .summary-title {
      user-select: none;
    }

    &:hover {
      cursor: pointer;
    }

    .summary-content {
      cursor: default;
      font-weight: 300;
    }

    summary {
      margin-bottom: 12.5px;
      list-style: none;
      padding-right: 3.5em;

      &:focus {
        outline: none;
      }

      &:hover .summary-chevron-up svg {
        opacity: 0.5;
        color: var(--color-neutral-lighter-alt);
      }
    }

    .summary-chevron-up svg {
      opacity: 1;
      color: var(--color-neutral-lighter-alt);
    }

    .summary-chevron-up {
      pointer-events: none;
      position: absolute;
      top: 0.45em;
      right: 1em;
      padding-left: 7px;
      border-left: 1px solid var(--color-neutral-lighter-alt);
      svg {
        display: block;
      }
    }

    summary::-webkit-details-marker {
      display: none;
    }
`;

export const TableContainer = styled.div`
  padding: 220px 0px 0px 50px;
  display: flex;
  height: 87.1vh;
  width: 100%;
  max-height: 850px;
  min-height: 300px;
  font-family: Nunito, sans-serif;
  color: var(--color-neutral-3);
`;
