'use strict';

const Koa = require('koa');

const app = new Koa();
const bodyParser = require('koa-body-parser')();
const serve = require('koa-static');
const Router = require('koa-router');
const ssr = require('../dist/server');
const cards = require('./controllers/cards');
const transactions = require('./controllers/transactions');
// const logger = require('../libs/logger')('school');

const CardsModel = require('./models/cards');
const TransactionsModel = require('./models/transactions');

const logger = console;

const router = new Router();

app.use(bodyParser);
app.use(router.routes());
app.use(serve('../public'));

app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		logger.log('Error detected', err);
		ctx.status = err.status || 500;
		ctx.body = `Error [${err.message}] :(`;
	}
});

router.param('id', (ctx, next) => next());

router.get('/', ssr);

const models = {
	cards: new CardsModel(),
	transactions: new TransactionsModel()
};

app.use(cards(Router, models));
app.use(transactions(Router, models));

app.listen(3000, () => {
	logger.log('Application started');
});
