import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-around;
  overflow-x: scroll;
  //height: 30vh;
    ::-webkit-scrollbar {
      display: none
    }
    z-index: 1;
`;

export default Container;
