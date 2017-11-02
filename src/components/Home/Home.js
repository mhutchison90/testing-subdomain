import React, { Component } from "react";

import './Home.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }



    render() {
        return (
            <div className='Home-Container'>
                <h1 className='welcome-header'>WELCOME TO MY SUB DOMAIN</h1>
            </div>
        );
    };
};
