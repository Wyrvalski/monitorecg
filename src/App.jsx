import React, {useEffect, useState} from 'react';
import axios from "axios";
import CanvasJSReact from './assets/canvasjs.react';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import {ButtonContainer, Container} from "./style";

const { CanvasJSChart } = CanvasJSReact;
let chart = null;
const xAxisStripLinesArray = [];
const yAxisStripLinesArray = [];
const dps = [];

function App() {
  const [dataPointsArray, setDataPointsArray] = useState();
  const [initialValues] = useState(800);
  const loadValuesData = async () => {
    try {
      const test = await axios.get('http://cloudecg-env.eba-mau7x2gw.us-east-1.elasticbeanstalk.com/baseR4/Observation/6441a0da0c73d10db306ba36/data/1');
      setDataPointsArray(test.data[0].data.split(' '))
      return  test.data[0].data.split(' ')
    } catch (errr) {
      return errr;
    }
  };
  function addDataPoints() {
    if (chart) {
      for (let i = 0; i < initialValues; i+=1) {
        dps.push({ y: Number(dataPointsArray[i]) });
      }
      chart.render();
    }
  }
  useEffect(() => {
    loadValuesData();
  }, [])
  useEffect(() => {
    if (!chart) return;
    addDataPoints(chart);
  }, [dataPointsArray])

  const color = 'red';

  const options = {
    theme: 'light2',
    axisY: {
      stripLines: yAxisStripLinesArray,
      gridColor: color,
      gridThickness: .5,
      interval: 20,
      lineColor: color,
      tickThickness: 0,
      labelFormatter() {
        return '';
      },
    },
    axisX: {
      stripLines: xAxisStripLinesArray,
      gridColor: color,
      gridThickness: 1,
      interval: 20,
      lineColor: color,
      tickThickness: 0,
      labelFormatter() {
        return '';
      },
    },
    data: [
      {
        type: 'spline',
        color: 'black',
        dataPoints: dps,
      },
    ],
  };

  return dataPointsArray && (
      <>
    <Container id="container">
      <div>
        <CanvasJSChart
            options={options}
            onRef={(ref) => {chart = ref}}
        />
      </div>
    </Container>
  <ButtonContainer>
    <button id="play" type="button" >Play</button>
    <button id="stop" type="button" >Stop</button>
    <button id="play" type="button" onClick={() =>
    { document.getElementById('container').scrollLeft = 0}
    }>Reset</button>
  </ButtonContainer>
  </>
        );
}




export default App;
