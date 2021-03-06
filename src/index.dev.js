import React from 'react'
import 'react-hot-loader/patch'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import './index.css'

const mountPoint = document.getElementById( 'root' )

const renderApp = ( NewApp ) => {
    render( <AppContainer><NewApp/></AppContainer>, mountPoint )
}

renderApp( App )

if ( module.hot ) {
    module.hot.accept( './components/App', () => {
        const NewApp = require( './components/App' )[ 'default' ]

        renderApp( NewApp )
    } )
}
