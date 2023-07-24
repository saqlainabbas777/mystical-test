const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
const postcssConfig = require('./postcss.config');

module.exports = {
    rollup(config, options) {
        config.plugins = [
            images({ include: ['**/*.svg'] }),
            postcss({
                ...postcssConfig,
                inject: true,
                // only write out CSS for the first bundle (avoids pointless extra files):
                extract: !!options.writeMeta,
            }),
            ...config.plugins];

        return config;
    },
};
