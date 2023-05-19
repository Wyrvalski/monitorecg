import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  //background-color: black;
  justify-content: space-around;
  overflow-x: scroll;
  //height: 30vh;
    ::-webkit-scrollbar {
      display: none
    }
    z-index: 1;
`;

export const Button = styled.button`
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  height: 50px;
  background-image: ${(props) => props?.icon && `url(${props.icon})`};
  background-size: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
