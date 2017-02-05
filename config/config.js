const uniqPort = require( 'uniq-port' )
const appName = require( '../package.json' ).name

module.exports = {

    devServerPort: uniqPort( appName )

}
