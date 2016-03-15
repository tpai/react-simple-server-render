var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: {
        foo: './src/components/foo/index',
        bar: './src/components/bar/index'
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".scss"]
    },
    output: {
        filename: './public/js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss|\.css$/,
                loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss"
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    postcss: [
        autoprefixer({browsers:["> 5%", "ie >= 8", "Firefox < 20"]}),
        precss()
    ]
};
