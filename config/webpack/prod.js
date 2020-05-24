/*
 * @Author: liwenyu
 * @Date: 2020-04-09 10:01:34
 * @LastEditTime: 2020-05-14 20:52:12
 * @LastEditors: liwenyu
 * @Description:
 * @FilePath: \hacker_news_thread_detail\config\webpack\prod.js
 */
const merge = require('webpack-merge')
const common = require('./common.js')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: 'production', // 压缩代码
	module: {
		rules: [
			{
				test: /\.(le|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'less-loader'
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new TerserWebpackPlugin(),
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({}),
			new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: 'dist'}),
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: '[name].[hash].css',
				chunkFilename: '[id].[hash].css'
			})
		]
	}
})
