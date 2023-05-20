import axios from 'axios';
import SET_DATA from './types';

const loadValuesData = async (dispatch) => {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const res = await axios.get('cloudecg-env.eba-mau7x2gw.us-east-1.elasticbeanstalk.com/baseR4/Observation/6441a0da0c73d10db306ba36/data/1', config);
    dispatch({
      type: SET_DATA,
      payload: res.data[0].data.split(' '),
    });
  } catch (errr) {
    console.log(errr, 'https://monitorecg-production.up.railway.app/');
    return errr;
  }
  return null;
};

export default loadValuesData;
