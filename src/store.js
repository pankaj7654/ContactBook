import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

//store create
const store = createStore(rootReducer, composeWithDevTools())

export default store;