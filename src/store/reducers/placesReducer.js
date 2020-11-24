import {
  SET_NEW_COORDINATES,
  SET_NEW_ADDRESS,
  SELECTED_ADDRESS
} from '../../variables';

export const placesActions = {
  setCoordinates: (newCoordinates) => ({
    'type': SET_NEW_COORDINATES,
    'payload': newCoordinates
  }),
  setAddress: (newValue) => ({
    'type': SET_NEW_ADDRESS,
    'payload': newValue
  }),
}

const initialState = {
  lat: null,
  lng: null,
  address: '',
  selectedAddress: '',
}


export default(state = initialState, action) => {
  console.log(state);
  switch(action.type){
    case SET_NEW_COORDINATES:
      return {...state, lat: action.payload.lat, lng: action.payload.lng};
    case SET_NEW_ADDRESS:
      return {...state, address: action.payload};
    case SELECTED_ADDRESS:
      return {...state, selectedAddress: action.payload};
    default: 
    return state;
  }
}
