import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import placesReducer from './reducers/placesReducer';

const rootReducer = combineReducers({
  places: placesReducer,
})

const store = createStore(
  rootReducer
);

export default store;
