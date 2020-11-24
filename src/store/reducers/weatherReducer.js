import { SET_TEMPERATURE } from '../../variables';

export const weatherActions = {
  setTemperature: (newTemperature) => ({
    'type': SET_TEMPERATURE,
    'payload': newTemperature
  })
}

const initialState = {
  data: null,
}

export default(state = initialState, action) => {
  console.log(action);
  switch(action.type){
    case SET_TEMPERATURE:
      return {...state, data: action.payload};
    default: 
    return state;
  }
}
