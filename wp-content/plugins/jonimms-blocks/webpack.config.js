const path = require('path');
const glob = require('glob');

const blocks = glob.sync('./blocks/*/index.js');

module.exports = {
    entry: blocks.reduce((entries, file) => {
        const blockDir = path.basename(path.dirname(file)); // e.g., 'current-year'
        entries[blockDir] = path.resolve(__dirname, file);
        return entries;
    }, {}),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]/[name].js',
    },
    externals: {
        '@wordpress/blocks': ['wp', 'blocks'],
        '@wordpress/element': ['wp', 'element'],
        '@wordpress/editor': ['wp', 'editor'],
        '@wordpress/block-editor': ['wp', 'blockEditor'],
        '@wordpress/components': ['wp', 'components'],
        '@wordpress/i18n': ['wp', 'i18n'],
        '@wordpress/data': ['wp', 'data'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
