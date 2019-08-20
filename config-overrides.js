/* config-overrides.js */
const path = require('path');

module.exports = function override(config, env) {
	config.resolve.alias['@'] = path.resolve(__dirname, './src');
	config.resolve.alias['@assets'] = path.resolve(__dirname, './src/assets');
	config.resolve.alias['@views'] = path.resolve(__dirname, './src/views');
	config.resolve.alias['@utils'] = path.resolve(__dirname, './src/utils');
	return config;
}