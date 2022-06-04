import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-position: 50% 50%;
  background-size: cover;
  transform: rotateX(180deg) scaleX(-1);
`;

export const BottomContainer = styled.div`
  /* border: 1px solid blue; */
  margin-top: 80px;
  display: flex;
  flex: 1;
  flex-direction: row;
  padding-left: 100px;
  padding-right: 100px;

  height: 100%;
`;

export const LoginFormContainer = styled.div<{ isNarrow?: boolean }>`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  min-width: 350px;
  width: 20%;
  height: 100%;
  padding-top: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: auto;
  margin-top: 15px;
`;

export const LogoContainer = styled.div`
  /* border: 1px solid blue; */

  height: 100%;
  width: 80%;
  align-items: center;
  align-content: center;
  text-align: center;
  padding-top: 75px;
  margin-left: 35px;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 20px;
  .checkbox {
    margin-right: auto;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex: 1;
  position: absolute;
  z-index: 40;
  top: 140px;
  left: 1008px;
`;

export const Inputs = styled.input`
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
