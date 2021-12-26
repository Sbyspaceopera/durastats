module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{js,jsx,json,jpg,png}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};