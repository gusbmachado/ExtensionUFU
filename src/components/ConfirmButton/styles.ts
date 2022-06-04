import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Content = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  text-align: center;
  justify-content: center;

  .progress-bar {
    position: absolute;
    height: 9px;
    top: 2px;
    right: 2px;
  }
`;
