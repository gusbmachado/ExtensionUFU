import styled, { css } from 'styled-components';
import 'styles/global';

export const ProfileContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
  #user_img {
    display: inline-flex;
    cursor: pointer;
    position: absolute;
    background: var(--color-neutral-darker);
    top: 25px;
    width: 56px;
    padding: 4px;
    right: 50px;
    z-index: 2;
  }
`;

export const Navbar = styled.nav<{ loginPage?: boolean }>`
  display: ${({ loginPage }) =>
    loginPage ? 'none' : 'block'};
  z-index: 10;
  overflow: hidden;
  background-color: var(--color-neutral-darker);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  align-items: center;
  justify-content: space-between;
  p {
    cursor: pointer;
    float: left;
    display: block;
    color: var(--color-neutral-blank);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: Nunito, sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 29px;
  }
  p:hover {
    color: var(--color-system-blue);
    opacity: 1;
  }
  p.active {
    color: var(--color-system-blue);
    opacity: 1;
  }
`;

export const LogoHeaderContainer = styled.div`
  position: absolute;
  margin-left: 5px;
  top: 30px;
  svg {
    height: 50.4px;
  }
`;

export const Ul = styled.ul`
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Li = styled.li<{ selected?: boolean }>`
  user-select: none;
  cursor: default;
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  height: 50px;
  justify-content: center;
  text-decoration: none;
  display: flex;
  font-size: 14px;
  line-height: 16px;
  margin: 0 10px;
  white-space: nowrap;
  margin-left: 50px;
  p {
    color: ${({ selected }) =>
    selected ? 'var(--color-system-blue)' : 'var(--color-neutral-blank)'};
  }
`;

export const Info = styled.li<{
  top?: string;
  fontSize?: string;
  color?: string;
}>`
  user-select: none;
  cursor: pointer;
  position: absolute;
  right: 150px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 50px;
  justify-content: center;
  text-decoration: none;
  line-height: 16px;
  margin: 0 10px;
  white-space: nowrap;
  margin-left: 50px;
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const Div = styled.div`
  position: absolute;
  width: 272px;
  font-size: 24px;
  opacity: 0;
  transition: opacity 0.5s ease-in, transform 0.5s ease-in;
  cursor: pointer;
  right: -180px;
  background-color: var(--color-neutral-darker);
  border-right: 1px solid var(--color-neutral-blank);
  .options:hover {
    border: 2px solid red;
    background-color: white;
  }
`;

export const MenuButton = styled.div<{
  menuOpen?: boolean;
  padding?: string;
  top?: string;
  boxShadow?: string;
}>`
  position: absolute;
  width: 272px;
  font-size: 24px;
  opacity: 0;
  transition: opacity 0.5s ease-in, transform 0.5s ease-in;
  cursor: pointer;
  right: -180px;
  background-color: var(--color-neutral-darker);
  border-right: 1px solid var(--color-neutral-blank);
  :hover {
    background-color: var(--color-neutral-dark);
  }
  #option_icon {
    padding-top: 4px;
  }
  ${({ menuOpen }) =>
    menuOpen
      ? css`
          opacity: 1;
          transform: translateX(-300px);
        `
      : css`
          opacity: 0;
          transform: translateX(300px);
        `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: ${boxShadow};
    `}
`;
