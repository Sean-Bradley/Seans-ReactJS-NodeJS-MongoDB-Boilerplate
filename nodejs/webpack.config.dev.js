import path from 'path';
import WriteAssetsWebpackPlugin from 'write-assets-webpack-plugin';

export default {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, './react/index.js')
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
            },
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: [
        new WriteAssetsWebpackPlugin({ force: true, extension: ['js'] })
    ]

}