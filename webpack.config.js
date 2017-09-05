const path = require('path');

module.exports = {
    entry: './src/mirrors.js',
    output: {
        filename: 'mirrors.js',
        path: path.resolve(__dirname, 'dist')
    }
}