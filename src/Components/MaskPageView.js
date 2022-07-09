import React, { Component } from "react";
import ItemsView from "./ItemsView";
import SelectItemsCard from "./SelectItemsCard";
import SelectItemsCard2 from "./SelectItemsCard2";
import SelectItemsCard3 from "./SelectItemsCard3";
// import PropTypes from "prop-types";
import ShoppingCartManager from "../Model/ShoppingCartManager";
import CheckOutCard from "./CheckOutCard";

class MaskPageView extends Component {
  constructor(props) {
    super(props);

    this.manager = new ShoppingCartManager();
    this.state = {
      shoppingCart: [],
    };
  }
  //   static propTypes = {
  //     children: PropTypes.oneOfType([
  //       PropTypes.arrayOf(PropTypes.node),
  //       PropTypes.node,
  //     ]).isRequired,
  //   };

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <ItemsView />
        <SelectItemsCard />
        <SelectItemsCard2 />
        <SelectItemsCard3 />
        <CheckOutCard />
      </div>
    );
  }
}

export default MaskPageView;
