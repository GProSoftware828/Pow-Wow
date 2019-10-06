import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import PropTypes from 'prop-types';
import App from '../components/App';
import registerServiceWorker from 'registerServiceWorker';
import { API_WS_ROOT } from './constants';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ActionCableProvider url={API_WS_ROOT}>
      <App />
    </ActionCableProvider>,
    document.getElementById('root'),
    document.body.appendChild(document.createElement('div'))
  );
});
registerServiceWorker();
