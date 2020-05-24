/*
 * @Author: liwenyu
 * @Date: 2020-04-09 09:59:38
 * @LastEditTime: 2020-05-14 16:55:47
 * @LastEditors: liwenyu
 * @Description:
 * @FilePath: \web-pay-center\config\webpack\common.js
 */
const {join: pathJoin} = require('path')
const {CheckerPlugin} = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: './src/index.tsx'
	},
	output: {
		filename: '[name].[hash].js',
		path: pathJoin(__dirname, '../../dist')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@': pathJoin(__dirname, '../../src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader', 'source-map-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'awesome-typescript-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]'
				]
			}
		]
	},
	plugins: [
		new CheckerPlugin(),
		new HtmlWebpackPlugin({
			template: './public/template.html',
			filename: 'index.html'
		})
	],
	performance: {
		hints: false
	}
}
