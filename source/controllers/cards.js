const CardsModel = require('../models/cards');

const cards = new CardsModel();

module.exports = function(Router) {
	const router = new Router({
		prefix: '/cards'
	});

	router.get('/', async ctx => {
		ctx.body = await cards.getAll();
	});

	router.post('/', async ctx => {
		const newCard = {
			cardNumber: ctx.request.body.cardNumber,
			balance: parseInt(ctx.request.body.balance, 10)
		};
		ctx.body = await cards.create(newCard);
	});

	router.delete('/:id', async ctx => {
		const cardId = parseInt(ctx.params.id, 10);
		await cards.remove(cardId);
		ctx.body = 'classno';
	});

	return router.routes();
}
