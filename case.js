const items = [1, 2, 3, 'one', 'two', 'three'];

const displayValue = value => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('value is', value);
			resolve()
		}, 1000);
	})
}

Promise.all(items.map(displayValue));

items.reduce((p, c) => p.then(displayValue.bind(this, c)), Promise.resolve());
