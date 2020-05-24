/*
 * @Author: liwenyu
 * @Date: 2020-04-09 09:59:59
 * @LastEditTime: 2020-05-18 16:02:14
 * @LastEditors: liwenyu
 * @Description:
 * @FilePath: \web-pay-center\config\webpack\dev.js
 */
const merge = require('webpack-merge')
const common = require('./common.js')
const webpack = require('webpack')

module.exports = merge(common, {
	mode: 'development',
	entry: [
		'react-hot-loader/patch', // activate HMR for React
		// 'webpack-dev-server/client?http://localhost:3100', // bundle the client for webpack-dev-server and connect to the provided endpoint
		'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
		'./src/index.tsx' // the entry point of our app
	],
	devServer: {
		// 若编译过程中有错误，显示到网页上,便于定位错误
		overlay: {
			errors: true
		},
		// contentBase:'./dist',  //设置服务器访问的基本目录
		// host:'localhost', //服务器的ip地址
		port: 3100, //端口
		// open:true,  //自动打开页面
		disableHostCheck: true,
		hot: true // enable HMR on the server
	},
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [
			{
				test: /\.(le|c)ss$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // enable HMR globally
		new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
	]
})
