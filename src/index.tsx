import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
