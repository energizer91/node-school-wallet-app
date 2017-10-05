import React from 'react';
import {renderToString} from 'react-dom/server';
import template from './browser';
import App from './client/components/App';

export default function render(ctx) {
	const appString = renderToString(<App />);
	ctx.body = template({
		body: appString,
		title: 'FROM THE SERVER',
	});
}
