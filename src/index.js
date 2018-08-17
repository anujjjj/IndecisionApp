import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
