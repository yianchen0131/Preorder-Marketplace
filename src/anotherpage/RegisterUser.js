import React, { Component, createRef } from "react";
import Member from "../Model/Member";
import MemberManager from "../Model/MemberManager";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.refForm = createRef();
    this.state = {};
    this.onRegisterUser = this.onRegisterUser.bind(this);
  }

  onRegisterUser(event) {
    //Avoids redrawing whole page
    event.preventDefault();
    const userForm = new FormData(this.refForm.current);
    let mm = new MemberManager();
    const member = new Member(
      userForm.get("name"),
      userForm.get("emailID"),
      userForm.get("phoneNum"),
      userForm.get("shippingAddress")
    );
    mm.addMember(member, (res) => {
      console.log("The user is added", member.name);
    });

    alert("Registered!");
  }
  renderForm() {
    return (
      <form ref={this.refForm}>
        <h2>New Member</h2>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
            placeholder="name@example.com"
          >
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
            placeholder="name@example.com"
          >
            Email address (User ID)
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="emailID"
          />
          <div id="emailHelp" className="form-text">
            Well never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone number
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="phoneNum"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Shipping address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="shippingAddress"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Subscribe to text message updates
          </label>
        </div>
        <button
          onClick={this.onRegisterUser}
          type="submit"
          className="btn btn-primary"
        >
          Sign-up
        </button>
      </form>
    );
  }
  render() {
    return (
      <div className="container-sm">
        <div className="form">{this.renderForm()}</div>
      </div>
    );
  }
}

export default RegisterUser;
