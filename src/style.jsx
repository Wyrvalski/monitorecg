import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-around;
  overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none
    }
    z-index: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
`
