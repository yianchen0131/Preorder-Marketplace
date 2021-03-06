import React, { Component } from "react";

class RegisterUser extends Component {
  renderForm() {
    return (
      <form>
        <h2>Member Sign-In</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address (UserID)
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign-in
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
