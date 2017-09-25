//const express = require('express');
//const app = express();
const fs = require('fs');
const path = require('path');
//const bodyParse = require('body-parser');
const request = require('request');
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body-parser')();
const serve = require('koa-static');
const router = require('koa-router')();
// const co = require('co');

app.use(bodyParser);
app.use(router.routes());
app.use(serve('./public'));

//app.use(express.static('public'));

//app.use(bodyParse.json());

const readFile = (name) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve('source', name), (err, file) => {
			if (err) {
				return reject(err);
			}
			const cards = JSON.parse(file);

			return resolve(cards);
		});
	})
};

const doRequest = (url) => {
	return new Promise((resolve, reject) => {
		return request(url, (err, response, body) => {
			if (err) {
				return reject(err);
			}

			return resolve({
				body, response
			});
		})
	});
}

const readCards = () => {
	return readFile('cards.json');
};

const writeCards = data => {
	return new Promise((resolve, reject) => {
		fs.writeFile(path.resolve('source', 'cards.json'), JSON.stringify(data), (err) => {
			if (err) {
				return reject(err);
			}

			return resolve(true);
		});
	})
};

router.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		console.log(err);

		ctx.status = 500;
		ctx.body = err;
	}
})

router.get('/', async ctx => {
	res.send(`<!doctype html>
	<html>
		<head>
			<link rel="stylesheet" href="/style.css">
		</head>
		<body>
			<h1>Hello Smolny!</h1>
		</body>
	</html>`);
});

router.get('/error', async (req, res) => {
	throw Error('Oops!');
});

// app.get('/transfer', async (req, res) => {
// 	const {amount, from, to} = req.query;
// 	res.json({
// 		result: 'success',
// 		amount,
// 		from,
// 		to
// 	});
// });

router.get('/cards', async (ctx, next) => {
	ctx.body = await readCards()
		.catch(next);
});

router.post('/cards', async (ctx, next) => {
	const newCard = ctx.request.body;

	if (!newCard.cardNumber || !newCard.balance) {
		ctx.status = 400;
		return ctx.body = 'Invalid card data';
	}
	const cards = await readCards();
	await writeCards(cards.concat(newCard))
		.catch(next);

	ctx.body = newCard;
});

router.delete('/cards/:id', async (ctx, next) => {
	const cardId = parseInt(ctx.params.id, 10);
	if (isNaN(cardId)) {
		ctx.status = 400;
		return ctx.body = 'Invalid card id';
	}

	const cards = await readCards().catch(next);

	if (cards.length <= cardId) {
		ctx.status = 404;
		throw new Error('Card not found');
	}

	cards.splice(cardId, 1);

	await writeCards(cards).catch(next);

	ctx.body = 'class';

});

function* makeRequest() {
	let data = yield readFile('config.json');
	return doRequest(data.url);
}

router.use('/config', (req, res, next) => {
	return readFile('config.json').then(config => {
		return doRequest(config.url);
	}).then(data => {
		const statusCode = data.response.statusCode;
		console.log('statusCode', statusCode);

		res.json(statusCode);
	}).catch(next);
});

router.use('/async_config', async (req, res) => {
	const config = await readFile('config.json');
	const data = await doRequest(config.url);

	const statusCode = data.response.statusCode;
	console.log('statusCode', statusCode);

	res.json(statusCode);
});

app.listen(3000, () => {
	console.log('YM Node School App listening on port 3000!');
});
