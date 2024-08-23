const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({ preset: 'default' }),
        purgecss({
            content: [
                './src/**/*.html',
                './src/**/*.js',
            ],
        }),
    ],
};
