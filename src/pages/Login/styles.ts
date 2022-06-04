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
  background: var(--color-neutral-blank);
  background-position: 50% 50%;
  background-size: cover;
  transform: rotateX(180deg) scaleX(-1);
`;

export const IconViacast = styled.img`
  width: 102px;
`

export const TopContainer = styled.div`
  /* border: 1px solid red; */

  height: 160px;
  min-height: 160px;
  max-height: 160px;
  width: 100%;
`;

export const LogoHeaderContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-left: 100px;
  padding-top: 60px;
  svg {
    height: 57px;
  }
`;

export const Line = styled.div`
  width: 200px;
  height: 3px;
  background-color: var(--color-neutral-blank);
`;

export const BottomContainer = styled.div`
  /* border: 1px solid blue; */

  display: flex;
  flex: 1;
  flex-direction: row;
  padding-left: 300px;

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
  margin-left: 100px;
  margin-top: 30px;
`;

export const ButtonGoogleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const LogoContainer = styled.div`
  /* border: 1px solid blue; */
  height: 100vh;
  width: 100%;
  align-items: center;
  align-content: center;
  text-align: center;
  padding-top: 225px;
  padding-bootom: 225px;
  margin-left: 430px;
  background: var(--color-main-green);
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

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
