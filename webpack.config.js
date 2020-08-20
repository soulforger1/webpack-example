module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
};