import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import DevTools from './DevTools';

// import Home from './Home';
// import About from './About';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/hello/:name" component={Hello} />
                            <Route path="/about" component={About} />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </Nav>
                    <DevTools/>
                </div>
            </Router>
        );
    }
}

const PageNotFound = () => <h1>404</h1>;
const Home = () => <h1> Home!</h1>;
const Hello = ({ match }) => <h1> ehlo {match.params.name}!</h1>;
const About = () => <h1> About!</h1>;
const Nav = props =>
    <div>
        <ul>
            <li>
                <NavLink exact activeStyle={{color: '#48abee'}} to="/">home</NavLink>
            </li>
            <li>
                <NavLink exact activeStyle={{color: '#48abee'}} to="/about">about</NavLink>
            </li>
        </ul>
        {props.children}
    </div>
export default App;
