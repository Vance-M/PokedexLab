import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import SearchPage from './searchPage.js';
import HomePage from './homePage.js';
import Header from './header.js';
import DetailPage from './DetailPage.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route
                            path="/:pokemonName"
                            exact
                            component={DetailPage}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
