import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store';
<<<<<<< HEAD
import { Provider } from 'react-redux';

=======
// import MyReducxContext from './Context/MyReduxContext';
import { Provider } from 'react-redux';

// store.subscribe(() => {
//   ReactDOM.render(<App store={store} />, document.getElementById('root'));
// });

>>>>>>> c9b7713146fc37de51c23fb4bc4791f9b78bed41
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
