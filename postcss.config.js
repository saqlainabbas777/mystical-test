const cssnano = require('cssnano');

module.exports = {
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
            flexbox: 'no-2009',
        }),
        // autoprefixer(),
        cssnano({
            preset: 'default',
        }),
    ],
};
