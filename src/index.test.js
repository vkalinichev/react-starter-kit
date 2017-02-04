import App from './components/App'

describe( 'Index', () => {

    it( 'renders correctly', () => {
        ReactDOM.render( <App/>, document.createElement( 'div' ) )
    })

} )
