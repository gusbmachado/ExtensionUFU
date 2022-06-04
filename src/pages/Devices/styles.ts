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
  left: 1060px;
`;
