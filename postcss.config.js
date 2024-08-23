const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
      require('autoprefixer'),  // Agrega prefijos de navegador
      require('cssnano')({ preset: 'default' }), //CSS Nano

      purgecss ({
        content: [
          './src/**/*.html',
          './src/**/*.js',
        ]}),
    ],
    
    
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
        ],
      },
      
  };
  