# Webpack Quick Start

Initialise the project, create `package.json`:

    yarn init -y

Add dependencies:

    yarn add lodash

Add webpack and dev dependencies:

    yarn add --dev webpack webpack-dev-server
    yarn add --dev typescript ts-loader style-loader \
        source-map-loader sass-loader html-webpack-plugin \
        extract-text-webpack-plugin css-loader core-js 

Add typescript type definitions:

    yarn add --dev @types/core-js @types/lodash @types/node

Create `tsconfig.json`, TypeScript config:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "sourceMap": true,
    "target": "es6",
    "types" : [ "node", "core-js" ]
  }
}
```

Create `webpack.config.js`, basic webpack config:

```javascript
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devtool: "source-map"
};
```

