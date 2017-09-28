const TransactionsModel = require('../models/transactions');

const ApplicationError = require('../../libs/application-error');

const transactions = new TransactionsModel();

module.exports = function(Router) {
	const router = new Router({
		prefix: '/cards/:id/transactions'
	});

	router.get('/', async ctx => {
		ctx.body = await transactions.getById(parseInt(ctx.params.id, 10));
	});

	router.post('/', async ctx => {
		const newTransaction = {
			cardId: parseInt(ctx.params.id, 10),
			type: ctx.request.body.type,
			sum: parseInt(ctx.request.body.sum, 10),
			data: ctx.request.body.data
		};
		ctx.body = await transactions.create(newTransaction);
	});

	router.delete('/', async () => {
		throw new ApplicationError('Transactions cannot be deleted', 405);
	});

	return router.routes();
}
