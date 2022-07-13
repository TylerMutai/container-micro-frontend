import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import HelloReactApp from './components/HelloReactApp';

const Header = () => (
    <div>
        <Link to='/'>home</Link><br/>
        <Link to='/react'>use react</Link>
    </div>
)

function App() {
    return (
        <Router>
            dsfsdfsdfdsfdsfds <br/>
            <Header/>
            <hr/>
           {/* <Routes>
                <Route path="/" element={<HelloReactApp/>}/>
            </Routes>*/}
        </Router>
    )
}

export default App;
