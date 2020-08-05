import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, appl);

export default store;
