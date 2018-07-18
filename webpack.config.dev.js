import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, 'www/index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'www'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    mode: 'development',

    target: 'web',

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }

}