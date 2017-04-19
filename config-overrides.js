const uniqPort = require('uniq-port')
const appName = require('./package.json')['name']
const autoprefixer = require('autoprefixer')
const rtl = require('postcss-rtl')

const filterCssLoader = ({ test }) => test && test.toString() === '/\\.css$/'
const findCssLoader = (config) => config.module.loaders.filter(filterCssLoader)[0]

const configPostCss = (config, postcss) => config.postcss = postcss
const setDevServerPort = (port) => process.env.PORT = port
const addCssModules = (config, { template = 1 }) => {
    const cssLoader = findCssLoader(config)
    cssLoader.loader = cssLoader.loader.replace('css?', `css?modules&localIdentName=${ template }&`)
}

module.exports = (config, env) => {

    if (env === 'production') {
        addCssModules(config, { template: '[hash:base64:5]' })
        configPostCss(config, [
            autoprefixer({ browsers: '>1%' }),
            rtl
        ])
    } else {
        addCssModules(config, { template: '[name]__[local]' })
        setDevServerPort(uniqPort(appName))
    }

    return config
}
