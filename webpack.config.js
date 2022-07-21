const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|webp)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'SegelTeam',
            filename: 'index.html',
            template: 'src/template.html',
            favicon: 'src/assets/favicon.png',
            inject: 'body',
        }),
    ],
    devtool: "source-map",
    devServer: {
        static: "./dist"
    }
}