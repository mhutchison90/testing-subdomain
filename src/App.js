import React, { Component } from 'react';
import './App.css';
import router from './router';
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='App-Container'>
        <div className='Body-Container'>
          <div className='Left-Body-Container'>
          </div>
          <div className='Center-Body-Container'>
            {router}
          </div>
          <div className='Right-Body-Container'>
            <div className='Right-Side-Bar-Container'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
