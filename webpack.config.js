const path = require("path");
const glob = require('glob');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'

console.log(glob.sync('./src/framework/extends/**.js').reduce((obj, el) => { obj[path.parse(el).name] = el; return obj },{}))
module.exports = {
    entry: [
        // Fishboard features
        devMode ? "./src/test/index.js" : "./src/framework/fishboard.js",
        // Native extends
        //TODO: fix wrong format
        //glob.sync('./src/framework/extends/**.js').reduce((obj, el) => { obj[path.parse(el).name] = el; return obj },{})
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "fishboard.[chunkhash].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                exclude: /node_modules/,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: "./src/test/index.html",
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
    ]
};
