import profile from './assets/Profile.jpg';
import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <p>Hello</p>
                <img src={profile} alt="profile"/>
            </div>
        );
    }
}