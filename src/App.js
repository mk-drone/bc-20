import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import DevTools from './DevTools';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navigation>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/contact" component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    </Navigation>
                    <DevTools/>
                </div>
            </Router>
        );
    }
}

export default App;
