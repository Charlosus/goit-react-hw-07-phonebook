import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './src/components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
