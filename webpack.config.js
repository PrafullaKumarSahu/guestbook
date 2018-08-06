let webpack = require('webpack');
let path = require('path');

module.exports = {
	entry: {
		app: './resources/assets/js/app.js',
		vendor: ['vue', 'axios']

	},

	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].js',
		publicPath: './public'

	},

	module: {
	  rules: [
	    {
	      test: /\.js$|\.vue/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env']
	        }
	      }
	    }
	  ]
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
      		names: ['vendor']
		})
	]
};

if ( process.env.NODE_ENV === 'production' ){
	module.exports.plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				sourcemap: true,
				compress: {
					warnings: false
				}
			})
		);

	module.exports.plugins.push(
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			})
		);
}