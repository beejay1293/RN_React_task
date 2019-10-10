import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer, { history } from './reducers';

const enhancers = [];
const middlewares = [thunk, routerMiddleware(history)];

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);
const store = createStore(rootReducer, composedEnhancers);

export default store;
