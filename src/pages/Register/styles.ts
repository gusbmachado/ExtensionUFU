import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  z-index: 20;
  position: absolute;
  inset: 0;
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background: var(--color-neutral-blank);
  transform: rotateX(180deg) scaleX(-1);
`;

export const TopContainer = styled.div`
  height: 160px;
  min-height: 160px;
  max-height: 160px;
  width: 100%;
`;

export const LogoHeaderContainer = styled.div<{ isNarrow?: boolean }>`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-left: ${({ isNarrow }) => (isNarrow ? '50px' : '100px')};
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

export const BottomContainer = styled.div<{ isNarrow?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding-right: ${({ isNarrow }) => (isNarrow ? '50px' : '100px')};
`;

export const SignUpFormContainer = styled.div<{ isNarrow?: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  width: 20%;
  height: 100%;
  padding-top: 0px;
  text-align: center;
`;

export const CentralLogoContainer = styled.div`
  z-index: 20;
  height: 100vh;
  width: 100%;
  align-items: center;
  align-content: center;
  text-align: center;
  padding-top: 225px;
  padding-bootom: 225px;
  margin-right: 430px;
  margin-top: -160px;
  background: var(--color-main-green);
`;

export const NarrowLogoContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding-bottom: 20px;
  #hcaptcha-container {
    display: flex;
    flex: 1;
    margin-bottom: 15px;
    margin-left: auto;
  }
`;

export const ButtonContainer = styled.div`
  padding-left: 30%;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;