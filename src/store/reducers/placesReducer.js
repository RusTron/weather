import { SET_NEW_COORDINATES } from '../../variables';

export const setCoordinates = (newValue) => ({
  'type': SET_NEW_COORDINATES,
  'payload': newValue
});

export default(coordinates = {}, action) => {
  switch(action.type){
    default: 
    return coordinates;
  }
}
