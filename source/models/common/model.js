'use strict';

const fs = require('fs');
const path = require('path');

class Model {
	constructor(name) {
		this.params = {
			filename: path.resolve('data', name)
		};
	}

	/**
	 * Возвращает все объекты
	 * @returns {Promise}
	 */
	getAll () {
		return new Promise((resolve, reject) => {
			fs.readFile(this.params.filename, (err, file) => {
				if (err) {
					return reject(err);
				}
				let data;

				try {
					data = JSON.parse(file);
				} catch (e) {
					return reject(e);
				}

				return resolve(data);
			});
		})
	}

	/**
	 *
	 * @param {Number} id Идентификатор записи для поиска
	 * @returns {Object}
	 */
	async getById(id) {}

	/**
	 * Создание новой записи
	 * @param {Object} data данные записи
	 * @returns {Object}
	 */
	async create(data) {}

	/**
	 *
	 * @param {Number} id Идентификатор записи для удаления
	 * @returns {Promise.<void>}
	 */
	async remove(id) {}

	validate(fields, patterns) {
		let missingFields = [];
		let failedValidations = [];

		patterns.forEach(pattern => {
			if (!fields.hasOwnProperty(pattern.name)) {
				return missingFields.push(pattern.name);
			}

			if (!pattern.pattern.test(fields[pattern.name])) {
				failedValidations.push(pattern.name);
			}
		});

		if (missingFields.length) {
			throw new Error('Fields missing: ' + missingFields.join(','));
		}

		if (failedValidations.length) {
			throw new Error('Failed validation: ' + failedValidations.join(','));
		}
	}

	/**
	 * Сохраняет изменения
	 * @param {Object} data данные записи
	 * @returns {Promise.<void>}
	 */
	async _saveUpdates (data) {
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

module.exports = Model;
