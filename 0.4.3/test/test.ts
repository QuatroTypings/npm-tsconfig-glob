import * as tsconfig from 'tsconfig-glob';

tsconfig(null, (err) => {
    console.error(err);
});


tsconfig({
	configPath: '.',
	indent: 2,
	async: false
}, function(err) {
    console.error(err);
});