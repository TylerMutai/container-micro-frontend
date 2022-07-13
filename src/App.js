import {Link, Route, Routes} from 'react-router-dom'
import HelloReactApp from './components/HelloReactApp';
import CustomRouter from "./components/main/custom_router";
import {createBrowserHistory} from "history";


const Header = () => (
    <div>
        <Link to='/'>home</Link><br/>
        <Link to='/hello-react/react'>use react</Link> <br/>
        <Link to='/hello-react/'>use react home</Link>
    </div>
)

function App() {
    const history = createBrowserHistory();
    return (
        <>
            <CustomRouter history={history}>
                <h3>Container Routing</h3> <br/>
                <Header/>
                <hr/>
                <Routes>
                    <Route path={"/"} element={<div>Heyoooo, Home</div>}/>
                    <Route path={"*"} element={<></>}/>
                </Routes>
            </CustomRouter>
            <HelloReactApp history={history}/>
        </>
    )
}

export default App;
