import reducer from './reducer'
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
const middlewares = [thunk];

export default createStore(reducer, applyMiddleware(...middlewares));

