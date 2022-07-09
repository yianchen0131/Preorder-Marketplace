import React, { Component } from "react";
import { imageData } from "./imageData";

class ItemsView extends Component {
  render() {
    let example = ["The Ultimate Face Mask", "I want it ", "THat way"];
    return (
      <div>
        <div className="item-description container">
          <div className="row justify-content-md-center">
            <h1 className="setTitle">{`${example[0]}`}</h1>

            <img className="photo1" src={`${imageData[0].picture}`} alt="" />
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              explicabo ipsum quo reprehenderit eligendi inventore sint
              quibusdam, nam dolor officia ratione possimus dolorem alias
              accusantium et doloribus. A, sequi provident. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Iste, veniam nulla. Ipsam
              repudiandae vel reiciendis quae, nobis suscipit id optio odio
              inventore, accusamus ex debitis? Facilis, autem officia. A,
              tempora.
            </div>
            <img className="photo1" src={`${imageData[1].picture}`} alt="" />
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              explicabo ipsum quo reprehenderit eligendi inventore sint
              quibusdam, nam dolor officia ratione possimus dolorem alias
              accusantium et doloribus. A, sequi provident. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Iste, veniam nulla. Ipsam
              repudiandae vel reiciendis quae, nobis suscipit id optio odio
              inventore, accusamus ex debitis? Facilis, autem officia. A,
              tempora.
            </div>
            <img className="photo1" src={`${imageData[2].picture}`} alt="" />
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              explicabo ipsum quo reprehenderit eligendi inventore sint
              quibusdam, nam dolor officia ratione possimus dolorem alias
              accusantium et doloribus. A, sequi provident. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Iste, veniam nulla. Ipsam
              repudiandae vel reiciendis quae, nobis suscipit id optio odio
              inventore, accusamus ex debitis? Facilis, autem officia. A,
              tempora.
            </div>
            <img className="photo1" src={`${imageData[3].picture}`} alt="" />
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              explicabo ipsum quo reprehenderit eligendi inventore sint
              quibusdam, nam dolor officia ratione possimus dolorem alias
              accusantium et doloribus. A, sequi provident. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Iste, veniam nulla. Ipsam
              repudiandae vel reiciendis quae, nobis suscipit id optio odio
              inventore, accusamus ex debitis? Facilis, autem officia. A,
              tempora.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemsView;
