import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
        </header>
        <div className="container">
          <div clasName="row">
            <div className="col-6">
              <div className="card-img-top" src="http://placehold.it/700x300" alt="">
                <div>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="text">Name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
