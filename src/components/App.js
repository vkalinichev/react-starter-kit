import Component from './Component'

const App = () =>

    <div>
        Hi, this is <Component/>
        <div>
            Current environment: { process.env.NODE_ENV }
        </div>
    </div>

export default App