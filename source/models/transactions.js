'use strict';

const fs = require('fs');
const path = require('path');

const ApplicationError = require('../../libs/application-error');

class Transactions {
	constructor (params) {
		this.params = Object.assign({
			filename: path.resolve(__dirname, '..', 'data', 'transactions.json')
		}, params);
	}

	/**
	 * Возвращает все транзакции
	 * @returns {Promise}
	 */
	getAll () {
		return new Promise((resolve, reject) => {
			fs.readFile(this.params.filename, (err, file) => {
				if (err) {
					return reject(err);
				}
				const transactions = JSON.parse(file);

				return resolve(transactions);
			});
		})
	}

	/**
	 * Возвращает все транзакции определенной карты
	 * @param {Number} id идентификатор карты
	 * @returns {Object[]}
	 */
	async getById (id) {
		const transactions = await this.getAll();
		return transactions.filter(t => t.cardId === id);
	}

	/**
	 * Добавляет транзакцию
	 *
	 * @param {Object} transaction описание транзакции
	 * @returns {Object}
	 */
	async create (transaction) {
		const isDataValid = transaction &&
			transaction.hasOwnProperty('cardId') &&
			transaction.hasOwnProperty('type') &&
			transaction.hasOwnProperty('data') &&
			transaction.hasOwnProperty('sum') &&
			['paymentMobile', 'prepaidCard', 'card2Card'].indexOf(transaction.type) >= 0;
		if (isDataValid) {
			const transactions = await this.getAll();
			transaction.id = transactions.length + 1;
			transaction.time = new Date();
			transactions.push(transaction);
			await this._saveUpdates(transactions);
			return transaction;
		}

		throw new ApplicationError('Transaction data is invalid', 400);
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

module.exports = Transactions;
