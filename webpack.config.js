const path = require('path');

module.exports = {
  entry: './js/index.js',  // Entrada de tu archivo JS principal
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Salida de Webpack
  },

  // Optimización de Archivos JS
  mode: 'production',  // Modo de producción para optimizar
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Transpilación de ES6+
        },
      },
    ],
  },


  // Cargar y optimizar imágenes
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // HMR (Hot Module Replacement)
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  
};

