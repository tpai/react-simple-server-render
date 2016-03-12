module.exports = {
    entry: {
        foo: './src/components/foo/index',
        bar: './src/components/bar/index'
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        filename: './public/js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
