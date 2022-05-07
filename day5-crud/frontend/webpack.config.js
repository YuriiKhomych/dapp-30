const path = require('path');
const webpack = require('webpack')


module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js', // string
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    },
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser"),
            // fix Can't find variable: Buffer error:
            "buffer": require.resolve("buffer"),
            "vm": require.resolve("vm-browserify"),
        }
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        // fix Can't find variable: Buffer error:
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ]
};
