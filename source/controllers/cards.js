
module.exports = function(Router, models) {
	const router = new Router({
		prefix: '/cards'
	});

	const cards = models.cards;

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

	router.delete('/:id', async (ctx) => {
		const cardId = parseInt(ctx.params.id, 10);
		await cards.remove(cardId);
		ctx.body = 'classno';
	});

	router.post('/:id/pay', async (ctx) => {
		const card = await cards.getById(parseInt(ctx.params.id, 10));
		const amount = parseInt(ctx.request.body.amount, 10);
		const phone = ctx.request.body.phoneNumber;

		if (!card) {
			throw new Error('Card not found');
		}

		const result = await models.transactions.create({
			type: 'paymentMobile',
			cardId: card.id,
			sum: amount,
			data: phone
		});

		card.balance -= amount;

		ctx.body = result;
	});

	router.post('/:id/transfer', async (ctx) => {
		const card1 = await cards.getById(parseInt(ctx.params.id, 10));

		const receiverCardId = ctx.request.body.receiverCardId;

		const card2 = await cards.getById(receiverCardId);

		if (!card1 || card2) {
			throw new Error('Card not found');
		}

		const amount = ctx.request.body.amount;

		await models.transactions.create({
			type: 'card2Card',
			cardId: card1.id,
			sum: amount,
			data: card2.id
		});

		card1.balance -= amount;
		card2.balance += amount;

		await cards.update(card1);
		await cards.update(card2);

		ctx.body = await {ok: true};
	});

	return router.routes();
};
