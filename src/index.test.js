import App from './components/App'

import React from 'react'
import { render } from 'react-dom'

describe( 'Index', () => {

    it( 'renders correctly', () => {
        render( <App/>, document.createElement( 'div' ) )
    })

} )
