import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';
import Container from './styles';
import CanvasJSReact from '../assets/canvasjs.react';

const { CanvasJSChart } = CanvasJSReact;

const ChartECG = ({ initialValues, dataPointsArray }) => {
  const [chart, setChart] = useState();
  const [page, setPage] = useState(1);
  const [lastPosition, setLastPosition] = useState(0);
  const color = 'black';
  const [dps] = useState([]);
  const totalPages = Math.round(dataPointsArray.length / initialValues);
  const addDataPoints = () => {
    console.log(lastPosition, ' ppppppppppppppppp', chart);
    if (chart) {
      let pos = lastPosition;
      for (let i = lastPosition; i < initialValues; i += 1) {
        dps.push({ y: Number(dataPointsArray[i]) });
        pos += 1;
      }
      setLastPosition(pos);
      chart.render();
    }
  };

  const handleChange = () => {
    setPage(page + 1);
    addDataPoints(chart);
  };
  useEffect(() => {
    if (!chart) return;
    addDataPoints(chart);
  }, [dataPointsArray]);

  const options = {
    theme: 'light2',
    axisY: {
      gridColor: color,
      gridThickness: 1,
      interval: 19,
      lineColor: color,
      tickThickness: 0,
      labelFormatter() {
        return '';
      },
    },
    axisX: {
      gridColor: color,
      gridThickness: 1,
      interval: 19,
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
  return (
    <>
      <Container id="container">
        <div>
          <CanvasJSChart
            options={options}
            onRef={(ref) => { setChart(ref); }}
          />
        </div>
      </Container>
      <Pagination count={totalPages} page={page} onChange={handleChange} />

    </>

  );
};

ChartECG.propTypes = {
  initialValues: PropTypes.arrayOf.isRequired,
  dataPointsArray: PropTypes.arrayOf.isRequired,
};

export default ChartECG;
