import React, { Component } from 'react'
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList"; 
export default class extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar/>
      <TourList/>
    </React.Fragment>
    );
  }
}

