import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import adReducer from './ads-reducer';

const reducers = history => combineReducers({
  router: connectRouter(history),
  ad: adReducer
});

export default reducers;
