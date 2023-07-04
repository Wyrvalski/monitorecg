import React, { useEffect, useState } from 'react';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import ChartECG from './components';
import loadValuesData from './actions/data';
import { Loader, Page } from './style';

function App() {
  const [initialValues] = useState(1500);
  const data = useSelector((state) => state?.data?.dataPoints);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadValuesData);
  }, []);

  return data?.length ? (
    <Page>
      <ChartECG initialValues={initialValues} dataPointsArray={data} />
      <ChartECG initialValues={initialValues} dataPointsArray={data} />
    </Page>

  ) : (
    <Loader>
      <ThreeCircles
        height="200"
        width="200"
        color="blue"
      />
    </Loader>

  );
}

export default App;
