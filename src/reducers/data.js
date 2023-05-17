import SET_DATA from '../actions/types';

const initialState = {
  dataPoints: [],
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_DATA:
      return {
        dataPoints: payload,
      };
    default:
      return state;
  }
}
