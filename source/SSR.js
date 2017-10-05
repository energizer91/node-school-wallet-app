import React from 'react';
import {renderToString} from 'react-dom/server';
import {extractCritical} from 'emotion-server';
import serialize from 'serialize-javascript';
import template from './browser';
import App from './client/components/App';

export default function render(ctx) {
	const {html, ids, css} = extractCritical(renderToString(<App />));
	ctx.body = template({
		body: html,
		css,
		ids: serialize(ids),
		title: 'WELCOME TO THE INTERNET',
	});
}
