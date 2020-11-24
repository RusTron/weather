import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import placesReducer from './reducers/placesReducer';
import weatherReducer from './reducers/weatherReducer';
import loadingReducer from './reducers/loadingReducer';

const rootReducer = combineReducers({
  places: placesReducer,
  weather: weatherReducer,
  loading: loadingReducer,
})

const store = createStore(
  rootReducer
);

export default store;
