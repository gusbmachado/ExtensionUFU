import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  inset: 0;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100% - 101px);
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const NotFoundContainer = styled.div`
  margin-top: 350px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  height: 200px;
  width: 100%;
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const Background = styled.div`
  position: fixed;
  inset: 0;
  top: 0px;
  z-index: -1;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 1));
  background-position: 50% 50%;
  background-size: cover;
  transform: rotateX(180deg) scaleX(-1);
`;
