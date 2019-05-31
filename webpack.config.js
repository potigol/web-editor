const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.(png|jpg|ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'file-loader'
            }]
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        proxy: {
          '/api': 'http://localhost:3000/',
        }
    }
};
