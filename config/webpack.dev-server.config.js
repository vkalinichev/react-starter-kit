const config = require( './config' )

module.exports = {

    port: config.devServerPort,

    stats: {
        colors: true,
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        version: false,
        time: false
    }

}
