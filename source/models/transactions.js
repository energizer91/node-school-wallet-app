'use strict';

const Model = require('./common/model');

const ApplicationError = require('../../libs/application-error');

class Transactions extends Model {
	constructor() {
		super('transactions.json');
	}

	/**
	 * Возвращает все транзакции определенной карты
	 * @param {Number} id идентификатор карты
	 * @returns {Object[]}
	 */
	async getById(id) {
		const transactions = await this.getAll();
		return transactions.filter(t => t.cardId === id);
	}

	/**
	 * Добавляет транзакцию
	 *
	 * @param {Object} transaction описание транзакции
	 * @returns {Object}
	 */
	async create(transaction) {
		try {
			this.validate(transaction, [
				{
					name: 'cardId',
					pattern: /^\d+$/
				},
				{
					name: 'type',
					pattern: /^(paymentMobile|prepaidCard|card2Card)$/
				},
				{
					name: 'data',
					pattern: /^\w+$/
				},
				{
					name: 'sum',
					pattern: /^\d+$/
				}
			]);
		} catch (e) {
			throw new ApplicationError(e, 400);
		}

		const transactions = await this.getAll();
		transaction.id = transactions.length + 1;
		transaction.time = new Date();
		transactions.push(transaction);
		await this._saveUpdates(transactions);
		return transaction;
	}
}

module.exports = Transactions;
