const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
    mode: "development",
    entry: {
        app: ['./src/index.js']
    },
    output: {
        filename: "bundle.js",
        path: __dirname + '/public'
    },

    resolve: {
        extensions: [".js", ".json", "html"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html"
        })
    ],

    devServer: {
        static: {
            directory: __dirname + "/public"
        },
        port: 3000
    }

}

module.exports = config