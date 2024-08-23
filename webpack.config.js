const path = require('path');

module.exports = {
    entry: './js/index.js', // Entrada de tu archivo JS principal
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Salida de Webpack
    },
    mode: 'production', // Modo de producción para optimizar
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpilación de ES6+
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        hot: true,
    },
};
