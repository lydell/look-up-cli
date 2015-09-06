#!/usr/bin/env node
'use strict';
var meow = require('meow');
var lookup = require('look-up');

var cli = meow({
	help: [
		'Usage',
		'  $ look-up \'<pattern>\'',
		'',
		'Options',
		'  --cwd=<dir>  Working directory',
		'',
		'Examples',
		'  $ echo $PWD',
		'  /Users/lydell/foo/bar',
		'  $ look-up \'unicorn.{png,jpg}\'',
		'  /Users/lydell/unicorn.png',
		'',
		'Don\'t forget to quote your pattern so it isn\'t expanded by your shell.'
	]
});

if (cli.input.length === 0) {
	console.error('Please specify a filename');
	process.exit(1);
}

var filepath = lookup(cli.input[0], cli.flags);

if (filepath) {
	console.log(filepath);
	process.exit();
} else {
	process.exit(1);
}
