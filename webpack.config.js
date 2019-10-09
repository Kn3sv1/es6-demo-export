module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ],
		rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
	resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
