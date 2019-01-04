import React, { Component } from 'react';
// import {
//   Grid, Row, Col, Panel, FormGroup, FormControl, ControlLabel, Button
// } from 'react-bootstrap';
import './app.css';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        { children }
      </div>
    );
  }
}
