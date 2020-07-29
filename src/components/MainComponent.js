import React, { Component } from 'react';
import Login from './Login';
import fire from '../config/fire';
import Header from './Header';
import Home from './HomeComponent';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

export default Main;