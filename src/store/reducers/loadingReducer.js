import { LOADED_DATA } from '../../variables';

export const loadingActions = {
  setLoading: (value) => ({
    type: LOADED_DATA,
    payload: value,
  }),
};

const initialState = {
  loaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADED_DATA:
      return { ...state, loaded: action.payload };
    default:
      return state;
  }
};
