'use strict';

const fs = require('fs');
const path = require('path');

const ApplicationError = require('../../libs/application-error');

class Cards {
	constructor (params) {
		this.params = Object.assign({
			filename: path.resolve(__dirname, '..', 'data', 'cards.json')
		}, params);
	}

	/**
	 * Возвращает все карты
	 * @returns {Promise}
	 */
	getAll () {
		return new Promise((resolve, reject) => {
			fs.readFile(this.params.filename, (err, file) => {
				if (err) {
					return reject(err);
				}
				const cards = JSON.parse(file);

				return resolve(cards);
			});
		})
	}

	/**
	 * Добавляет карту
	 *
	 * @param {Object} card описание карты
	 * @returns {Object}
	 */
	async create (card) {
		const isDataValid = card && card.hasOwnProperty('cardNumber') && card.hasOwnProperty('balance');
		if (isDataValid) {
			const cards = await this.getAll();
			card.id = cards.length + 1;
			cards.push(card);
			await this._saveUpdates(cards);
			return card;
		}

		throw new ApplicationError('Card data is invalid', 400);
	}

	/**
	 * Удалет карту
	 * @param {Number} id идентификатор карты
	 */
	async remove (id) {
		const cards = await this.getAll();
		const cardId = cards.findIndex((item) => {
			return item.id === id;
		});

		if (cardId < 0) {
			throw new ApplicationError(`Card with ID=${id} not found`, 404);
		}
		cards.splice(cardId, 1);
		await this._saveUpdates(cards);
	}

	/**
	 * Сохраняет изменения
	 * @private
	 */
	_saveUpdates (data) {
		return new Promise((resolve, reject) => {
			fs.writeFile(this.params.filename, JSON.stringify(data, null, 4), (err) => {
				if (err) {
					return reject(err);
				}

				return resolve();
			});
		})
	}
}

module.exports = Cards;
