import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-container';
import ContinentContainer from './containers/continent-container';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navigation>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/countries" component={CountryFlagContainer} />
                            <Route path="/countries/country/:id" component={CountryDetailsContainer} />
                            <Route path="/continents" component={ContinentContainer} />
                            <Route component={NotFound} />
                        </Switch>
                    </Navigation>
                </div>
            </Router>
        );
    }
}

export default App;
