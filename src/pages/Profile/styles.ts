import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  inset: 0;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100% - 101px);
  margin-top: 100px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  background-color: var(--color-neutral-darker);
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ProfilePictureContainer = styled.div`
  display: flex;
`;

export const ProfilePictureInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: space-between;
  .button {
    justify-content: space-evenly;
    svg {
      margin-right: 5px;
    }
  }
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 40px;
  margin-left: 350px;
  width: 500px;
  .button {
    margin-left: auto;
    margin-top: 25px;
  }
`;

export const ProfileInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  .input {
    width: 300px;
  }
  :not(:first-of-type) {
    margin-top: 15px;
  }
`;

export const ProfileLangConfig = styled.div`
  display: flex;
  flex: column;
  justify-content: space-between;
  position: relative;
  top: -75px;
  left: 350px;
  height: 50px;
  width: 500px;
  align-items: center;
  align-content: center;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  margin-left: 350px;
  margin-top: 30px;
  .button {
    margin-left: auto;
    margin-top: 25px;
  }
`;

export const Select = styled.select`
  padding: 5px 5px 5px;
  border-radius: 2px;
  outline: 0;
  width: 300px;
  height: 61px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-left: 155px;
  margin-right: 5px;
  transition: border-color 0.2s;
  border: none;
  box-shadow: none;
  font-family: Nunito, sans-serif;
  font-size: 24px;
  cursor: pointer;
  background: var(--color-neutral-darker-alt);
  color: var(--color-neutral_blank);
  option {
    background: var(--color-neutral-darker-alt);
    :hover {
      background: var(--color-neutral-darker);
    }
    ::selection {
      background: var(--color-neutral-lighter);
    }
    color: var(--color-neutral-blank);
  }
`;

export const H1 = styled.h1<{ marginBottom?: string }>`
  border: 8.65px solid var(--color-neutral-darker-alt);
  border-radius: 2px;
  background-color: var(--color-neutral-darker-alt);
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `}
`;
