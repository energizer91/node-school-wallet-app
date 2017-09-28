'use strict';

const Model = require('./common/model');

const ApplicationError = require('../../libs/application-error');

class Cards extends Model {
	constructor () {
		super('cards.json');
	}

	/**
	 * Возвращает все карту по id
	 * @param {Number} id идентификатор карты
	 * @returns {Object[]}
	 */
	async getById (id) {
		const cards = await this.getAll();
		return cards.filter(t => t.id === id);
	}

	/**
	 * Добавляет карту
	 *
	 * @param {Object} card описание карты
	 * @returns {Object}
	 */
	async create (card) {
		try {
			this.validate(card, [
				{
					name: 'cardNumber',
					pattern: /^\w{16}$/
				},
				{
					name: 'balance',
					pattern: /^\d+$/
				}
			]);
		} catch (e) {
			throw new ApplicationError(e, 400);
		}

		const cards = await this.getAll();
		card.id = cards.length + 1;
		cards.push(card);
		await this._saveUpdates(cards);
		return card;
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
}

module.exports = Cards;
