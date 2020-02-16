const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir)
}
const {
	override,
	useBabelRc,
	fixBabelImports,
	addWebpackAlias,
} = require('customize-cra')

const fixBabelImportsConfig = {
	libraryName: 'antd',
	libraryDirectory: 'es',
	style: 'css',
};

const alias = {
	"@": resolve('src')
}

const config = override(useBabelRc(), fixBabelImports('import', fixBabelImportsConfig), addWebpackAlias(alias));

module.exports = config