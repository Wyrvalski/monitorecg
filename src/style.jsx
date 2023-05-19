import styled from 'styled-components';
import backGraoung from './assets/ecg_back.png';

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const ContainerEcg = styled.div`
  background-image: url(${backGraoung}) ;
  position: relative;
  height: 415px;
  width: 90vw;
  //style="background-image: url(ecg_back.png); position: relative; height: 250px; width: 1000px;"
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
