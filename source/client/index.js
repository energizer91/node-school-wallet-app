import React from 'react';
import ReactDOM from 'react-dom';
import {hydrate} from 'emotion';
import {App} from './components';

if (typeof window !== 'undefined') {
	hydrate(window.__data); //eslint-disable-line
}
ReactDOM.render(<App />, document.getElementById('root'));
