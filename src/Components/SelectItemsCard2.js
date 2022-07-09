import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import ShoppingCartManager from "../Model/ShoppingCartManager";
import { itemData } from "../Model/ItemData";

class SelectItemsCard2 extends Component {
  constructor(props) {
    super(props);

    this.manager = new ShoppingCartManager();

    this.state = {
      qty: 0,
      first: itemData[1].setGallery.thumbnail,
      originalprice: itemData[1].price,
      price1: 75,
      subtotal: 0,
    };
    this.addtoCart = this.addtoCart.bind(this);
  }
  /**
   * addtoCart() function to calculate subtotal
   * and alert items have been added to cart
   */
  addtoCart() {
    if (this.state.qty >= 1) {
      this.setState({ subtotal: this.state.price1 });
      let sumTotal = this.manager.addToShopCart(this.state.price1);
      console.log(sumTotal);

      alert("Added to Shopping Cart!");
    }
  }

  /**
   * onClick of "-" button, item qty decrements
   * cannot be less than 0
   * price cannot show 0 even if qty is 0
   */
  decrement() {
    if (this.state.qty >= 1) {
      let quantity = this.state.qty - 1;
      let price = quantity > 0 ? quantity * this.state.originalprice : 60;
      this.setState({
        qty: quantity,
        price1: price,
      });
    }
  }
  /**
   * onClick of "+" button, item qty decrements
   * cannot be less than 0
   */
  increment() {
    let quantity = this.state.qty + 1;
    this.setState({
      qty: quantity,
      price1: quantity * this.state.originalprice,
    });
  }
  render() {
    return (
      <div>
        <div className="movecard">
          <Accordion className="bundlecard" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header
                className="header"
                style={{
                  width: "600px",
                }}
              >
                <img className="thumbnailpic" src={this.state.first} alt="" />
                <h4 className="titlecard">Moisture Mask Set</h4>
              </Accordion.Header>
              <Accordion.Body>
                <h5>Limited Time Offer: $ {this.state.price1}</h5>
                <button
                  type="button"
                  id="setbtn"
                  className="btn btn-primary"
                  onClick={() => this.addtoCart()}
                >
                  Add to Cart
                </button>

                <div id="buttongroup" className="col align-self-center">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => this.decrement()}
                    >
                      -
                    </button>
                    <h5 className="numqty">{this.state.qty}</h5>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => this.increment()}
                    >
                      +
                    </button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default SelectItemsCard2;
