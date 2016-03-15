require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]__[hash:base64:5]',
    extensions: ['.scss']
})
require('babel-core/register')({ presets: ['es2015', 'react'] });
require('./server');
