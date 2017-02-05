const {
    addPlugins, createConfig, defineConstants, env, entryPoint, setOutput, sourceMaps
} = require( '@webpack-blocks/webpack2' )
const devServer = require( '@webpack-blocks/dev-server2' )
const cssModules = require( '@webpack-blocks/css-modules' )
const postcss = require( '@webpack-blocks/postcss' )
const babel = require( '@webpack-blocks/babel6' )
const autoprefixer = require( 'autoprefixer' )
const plugins = require( './webpack.plugins.js' )
const devServerConfig = require( './webpack.dev-server.config' )

module.exports = createConfig( [
    setOutput( './build/app.js' ),
    babel(),
    addPlugins( plugins.basePlugins ),
    defineConstants( {
        'process.env.NODE_ENV': process.env.NODE_ENV
    } ),
    env( 'development', [
        entryPoint( './src/index.dev.js' ),
        cssModules( { localIdentName: '[name]__[local]' }),
        devServer( devServerConfig ),
        sourceMaps(),
        addPlugins( plugins.developmentPlugins )
    ] ),
    env( 'production', [
        entryPoint( './src/index.js' ),
        cssModules( { localIdentName: '[hash:base64:10]' }),
        postcss( [
            autoprefixer( { browsers: [ 'last 2 versions' ] } )
        ] ),
        addPlugins( plugins.productionPlugins )
    ] )
] )
