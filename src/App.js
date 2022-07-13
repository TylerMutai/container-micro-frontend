import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import HelloReactApp from './components/HelloReactApp';

const Header = () => (
    <div>
        <Link to='/'>home</Link><br/>
        <Link to='/hello-react/react'>use react</Link>
    </div>
)

function App() {
    return (
        <>
            <Router>
                <h3>Container Routing</h3> <br/>
                <Header/>
                <hr/>
                <Routes>
                    <Route path={"/"} element={<div>Heyoooo, Home</div>}/>
                </Routes>
            </Router>
            <HelloReactApp/>
        </>
    )
}

export default App;
