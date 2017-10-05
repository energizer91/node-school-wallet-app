'use strict';

const Koa = require('koa');

const app = new Koa();
const bodyParser = require('koa-body-parser')();
const serve = require('koa-static');
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const ssr = require('../public/bundle');

const router = new Router();

app.use(bodyParser);
app.use(router.routes());
app.use(serve('../public'));

app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		console.log('Error detected', err);
		ctx.status = err.status || 500;
		ctx.body = `Error [${err.message}] :(`;
	}
});

router.param('id', (req, res, next) => next());

router.get('/', ssr.default);


fs.readdir(path.join(__dirname, 'controllers'), (err, routes) => {
	if (err) {
		throw new Error('error parsing directory');
	}

	routes.forEach((route) => {
		const routeData = require(path.join(__dirname, 'controllers', route))(Router); //eslint-disable-line

		app.use(routeData);
	});
});


app.listen(3000, () => {
	console.log('Application started');
});
