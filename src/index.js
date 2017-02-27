import React from 'react'
import { render } from 'react-dom'
import './index.css'

import App from './components/App'

const mountPoint = document.getElementById( 'root' )

render( <App/>, mountPoint )
