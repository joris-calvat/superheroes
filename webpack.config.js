module.exports = {
    
    target: 'web',
    entry: {
        "index": './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/build'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devtool: 'source-map'
}