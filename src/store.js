import { createStore } from 'redux';
import reducer from './reducer';

// 만드는 방법
// const store = createStore(리듀서);
const store = createStore(reducer);
export default store;
