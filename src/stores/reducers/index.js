import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import cryptocurrency from './cryptocurrency';

export const history = createBrowserHistory();

const appReducer = combineReducers({
  router: routerReducer,
 cryptocurrency,
});


export default (state, action) => appReducer(state, action);
