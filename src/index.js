const { render } = ReactDOM
import './index.css'

import App from './components/App'

const mountPoint = document.getElementById( 'root' )

render( <App/>, mountPoint )
