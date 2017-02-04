import 'react-hot-loader/patch'
import { AppContainer } from 'react-hot-loader'
const { render } = ReactDOM

import App from './components/App'

const mountPoint = document.getElementById( 'root' )

const renderApp = ( NewApp ) => {
    render( <AppContainer><NewApp/></AppContainer>, mountPoint )
}

renderApp( App )

if ( module.hot ) {
    module.hot.accept( './components/App', () => {
        const NewApp = require( './components/App' ).default

        renderApp( NewApp )
    } )
}