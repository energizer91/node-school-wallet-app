const request = require('request');
const fs = require('fs');
const path = require('path');
// const co = require('co');

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

function* makeRequest() {
	let data = yield readFile('config.json');
	return doRequest(data.url);
}

const returnGenerator = (gen, value) => {
	const result = gen.next(value);
	if (result.done) {
		return result.value;
	}

	return result.value.then(returnGenerator.bind(this, gen));
}

const co = gen => {
	return returnGenerator(gen);
}

co(makeRequest()).then(data => {
	console.log('statusCode', data.response.statusCode);
})
