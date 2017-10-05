import React from 'react';
import ReactDOM from 'react-dom';
import {hydrate} from 'emotion';
import {App} from './components';

const {ids} = window.__data;

hydrate(ids);
ReactDOM.render(<App />, document.getElementById('root'));
