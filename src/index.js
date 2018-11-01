import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';

import watchFetchUser from './sagas';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(watchFetchUser);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
