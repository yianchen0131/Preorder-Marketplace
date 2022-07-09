import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import MaskPageView from "../Components/MaskPageView";

import CheckOutCard from "../Components/CheckOutCard";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <MaskPageView />
        <CheckOutCard />
      </div>
    );
  }
}

export default Home;
