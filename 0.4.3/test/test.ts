import * as tsconfig from 'tsconfig-glob';

tsconfig(null, (err) => {
    console.error(err);
});


tsconfig({
	configPath: '.',
	cwd: process.cwd(),
	indent: 2,
}, function(err) {
    console.error(err);
});