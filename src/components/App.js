import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';
import EarthquakeInfo from './EarthquakeInfo';
import EarthquakeList from './EarthquakeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
          <h1>Earthquakes!</h1>
          </div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
