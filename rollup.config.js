'use strict';
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const {babel} = require('@rollup/plugin-babel');
const strip = require('@rollup/plugin-strip');
const terser = require('rollup-plugin-terser').terser;
const pkg = require('./package.json');

module.exports = [
	// ES5 Non-minified
	{
		input: 'build/es5.js',
		output: {
			file: pkg.browser,
			format: 'umd',
			name: 'JSON5',
		},
		plugins: [
			strip({functions: ['log']}),
			resolve(),
			commonjs(),
			babel(),
		],
	},
	// ES5 Minified
	{
		input: 'build/es5.js',
		output: {
			file: pkg.browser.replace(/\.js$/, '.min.js'),
			format: 'umd',
			name: 'JSON5',
		},
		plugins: [
			strip({functions: ['log']}),
			resolve(),
			commonjs(),
			babel(),
			terser(),
		],
	},
	// ES6 Modules Non-minified
	{
		input: 'lib/index.js',
		output: {
			file: pkg.browser.replace(/\.js$/, '.mjs'),
			format: 'esm',
		},
		plugins: [
			strip({functions: ['log']}),
			resolve(),
			commonjs(),
			babel(),
		],
	},
	// ES6 Modules Minified
	{
		input: 'lib/index.js',
		output: {
			file: pkg.browser.replace(/\.js$/, '.min.mjs'),
			format: 'esm',
		},
		plugins: [
			strip({functions: ['log']}),
			resolve(),
			commonjs(),
			terser(),
			babel(),
		],
	},
];
