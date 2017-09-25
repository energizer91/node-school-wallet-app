const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParse = require('body-parser');

app.use(express.static('public'));

app.use(bodyParse.json());

const readCards = () => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve('source', 'cards2.json'), (err, file) => {
			if (err) {
				return reject(err);
			}
			const cards = JSON.parse(file);

			return resolve(cards);
		});
	})
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

app.get('/', (req, res) => {
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

app.get('/error', (req, res) => {
	throw Error('Oops!');
});

app.get('/transfer', (req, res) => {
	const {amount, from, to} = req.query;
	res.json({
		result: 'success',
		amount,
		from,
		to
	});
});

app.get('/cards', (req, res, next) => {
	return readCards()
		.then(cards => {
			return res.json(cards);
		})
		.catch(next)
});

app.post('/cards', (req, res, next) => {
	const newCard = {
		cardNumber: req.body.cardNumber,
		balance: req.body.balance
	};

	if (!newCard.cardNumber || !newCard.balance) {
		res.status(400);
		return res.json('Invalid card data');
	}
	return readCards()
		.then(cards => {
			cards.push(newCard);

			return writeCards(cards);
		})
		.then(() => {
			return res.json(newCard)
		})
		.catch(next);
});

app.delete('/cards/:id', (req, res, next) => {
	const cardId = parseInt(req.params.id, 10);
	if (isNaN(cardId)) {
		res.status(400);
		return res.json('Invalid card id');
	}

	return readCards()
		.then(cards => {
			if (cards.length <= cardId) {
				res.status(404);
				throw new Error('Card not found');
			}

			cards.splice(cardId, 1);

			return writeCards(cards);
		})
		.then(() => {
			return res.json({success: true});
		})
		.catch(next);
});

app.use((err, req, res, next) => {
	console.log(err);

	res.status(500).json(err);
})

app.listen(3000, () => {
	console.log('YM Node School App listening on port 3000!');
});
