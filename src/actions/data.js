import axios from 'axios';
import SET_DATA from './types';

const loadValuesData = async (dispatch) => {
  try {
    const res = await axios.get('https://cloudecg-env.eba-mau7x2gw.us-east-1.elasticbeanstalk.com/baseR4/Observation/6441a0da0c73d10db306ba36/data/1');
    dispatch({
      type: SET_DATA,
      payload: res.data[0].data.split(' '),
    });
  } catch (errr) {
    return errr;
  }
  return null;
};

export default loadValuesData;
