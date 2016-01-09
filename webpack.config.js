var path = require('path');

module.exports = {
	cache: true,
	debug: true,
	devtool: 'source-map',
	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'dist/bundle.js'
	},
	module: {
	  loaders: [
			{
				test: /\.js.?$/,
				loader: ["babel"],
				exclude: /(node_modules|bower_components)/,
				query: {
						presets: ['es2015', 'react']
				}
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" }
	  ]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ["./src", "node_modules", "bower_components"]
	}
};
