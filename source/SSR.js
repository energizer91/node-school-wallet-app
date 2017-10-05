import React from 'react';
import {renderToString} from 'react-dom/server';
import {extractCritical} from 'emotion-server';
import template from './browser';
import App from './client/components/App';

export default function render(ctx) {
	const {html, css} = extractCritical(renderToString(<App />));
	ctx.body = template({
		body: html,
		css,
		title: 'WELCOME TO THE INTERNET',
	});
}
