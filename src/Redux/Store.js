import Reducer from './Reducer'

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk]

export default createStore(Reducer, applyMiddleware(...middlewares))