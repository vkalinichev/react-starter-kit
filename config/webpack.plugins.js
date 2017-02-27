const { webpack } = require( '@webpack-blocks/webpack2' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const OpenBrowserPlugin = require( 'open-browser-webpack-plugin' )
const config = require( './config' )

exports.basePlugins = [
    new webpack.ProvidePlugin( {} ),
    new HtmlWebpackPlugin( {
        inject: true,
        template: './src/index.html'
    } )
]

exports.developmentPlugins = [
    new OpenBrowserPlugin( { url: `http://localhost:${ config.devServerPort }` } )
]

exports.productionPlugins = [
    new webpack.LoaderOptionsPlugin( {
        minimize: true,
        debug: false
    } ),
    new webpack.optimize.UglifyJsPlugin( {
        compress: {
            warnings: false
        },
        output: {
            comments: false
        },
        screwIe8: true,
        sourceMap: false
    } )
]
