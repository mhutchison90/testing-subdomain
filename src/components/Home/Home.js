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
            <div class="parallax-container">
            <div class="layer back"></div>
            <div class="layer midd"></div>
            <div class="layer fore"></div>
            <div className='Home-Container'>
                <h1 className='welcome-header'>WELCOME TO MY SUB DOMAIN<br/> <br/> COMING SOON!</h1>
            </div>
          </div>
        );
    };
};
