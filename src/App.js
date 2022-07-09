import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import MemberManager from "./Model/MemberManager";
import ShoppingCartManager from "./Model/ShoppingCartManager";
import ItemManager from "./Model/ItemManager";
import { itemData } from "./Model/ItemData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.shopmanage = new ShoppingCartManager();
    this.itemsmanage = new ItemManager();
    this.member = new MemberManager();
    //push items
    this.itemsmanage.addItem(itemData);
  }

  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
