import React, { Component } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

class CheckOutCard extends Component {
  render() {
    const percentage = 250;
    return (
      <div>
        <div
          className="checkoutcard"
          style={{
            width: "20rem",
            height: "30rem",
            background: "#fffafa",
            color: "#737070",
            borderColor: "#d4d4d4",
            borderBlockColor: "#d4d4d4",
            borderWidth: "2px",
            borderRadius: "2%",
            fontSize: "18px",
            borderStyle: "solid",
            right: "20px",
            top: "10%",
            position: "fixed",
          }}
        >
          <div className="card-body">
            <div style={{ width: "100px", height: "100px" }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathColor: `rgba(247, 134, 134, ${percentage / 100})`,
                  textColor: "#bdbbbb",
                  textSize: "25px",
                })}
              />
            </div>
            <h5
              className="card-title"
              style={{ fontSize: "15px", fontWeight: "bolder" }}
            >
              $1,528,998USD ordered
            </h5>
            <p className="card-text">
              <h4 className="limitedtime">Limited Time Preorder</h4>
              <ul id="shoppingcart">
                <li className="descriptionbox">
                  <img className="icon2" src="/imgs/person.svg" alt="" />
                  25,484 Ordered
                </li>
                <li className="descriptionbox">
                  <img className="icon2" src="/imgs/alarm.svg" alt="" />
                  Ends on 04/30/2022
                </li>
              </ul>
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <img className="icon1" src="/imgs/credit-card.svg" alt="" />
              Pay in Installments
            </li>
            <li className="list-group-item">
              <img className="icon1" src="/imgs/truck.svg" alt="" />
              Free Shipping
            </li>
          </ul>
          <div className="card-body">
            <Link to="/MemberCheckout" className="custom-btn">
              <div className="checkout">Checkout</div>
            </Link>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default CheckOutCard;
