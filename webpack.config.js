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
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map'
}