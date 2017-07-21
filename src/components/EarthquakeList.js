import React, { Component } from 'react';
import Earthquakes from '../data/earthquakes.js';
import moment from 'moment';

export default class EarthquakeList extends Component {
  render() {
    let data = Earthquakes.features.map((result) => {
      return (

        <div className="col-sm-6" key={result.id}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">{result.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {result.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(result.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {result.geometry.coordinates}</p>

              <a href={result.properties.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>

      )
    });
    return (
      <div className="quake-list">
        <div className="row">
          {data}
        </div>
      </div>

    );
  }
}
