import React, { useEffect, useState } from 'react';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';
import ChartECG from './components';
import loadValuesData from './actions/data';
import { Loader, Page, ContainerEcg } from './style';

function App() {
  const [initialValues] = useState(500);
  const data = useSelector((state) => state?.data?.dataPoints);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadValuesData);
  }, []);

  // const y = [];// this contain the y values (readings) we will post the example values at the end of the article.
  // const currentPart = 0; // current page is 1st page in the ECG
  // const baseline = 201; // the is the ECG recording baseline
  // let total = 0; // total number of pages
  // let temp = y.length; // calculate the total number of pages
  // while (temp > 0) {
  //   temp -= 2000; // as shown in the 1st image , we will draw 4 seconds in each page (each second represented by 500 sample =2000 total sample)
  //   total++;
  // }
  // // initiliazie the graphics object to draw in our Div (i.e. Canvas)
  // const jg = new jsGraphics('Canvas');
  // // set this true if we need to allow the user to print it, it will impact performance a little.
  // jg.setPrintable(true);

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
