import React from "react";
import { Redirect, Link } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { signin, storeToken } from "./helper/userHelper";
import Facebook from "../../assets/icons/facebook-f-brands.svg";
import Google from "../../assets/icons/google-brands.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        email: "",
        password: "",
      },
      errors: {},
      success: false,
      error: "",
      reload: false,
      isLoading: false,
      completeProfile: false,
      redirectTo: "/",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.displayError = this.displayError.bind(this);
    this.displaySuccess = this.displaySuccess.bind(this);
    this.displayLoading = this.displayLoading.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.state && props.location.state.from.pathname) {
      return { ...state, redirectTo: props.location.state.from.pathname };
    }
    return { ...state };
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
      error: "",
    });
  }

  handleCapsLock(event) {
    let errors = this.state.errors;
    if (event.getModifierState("CapsLock")) {
      errors[event.target.name] = "Caps lock is ON.";
    } else {
      errors[event.target.name] = undefined;
    }
    this.setState({
      errors: errors,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      console.log(this.state);
      signin({
        email: this.state.input["email"],
        password: this.state.input["password"],
      })
        .then((data) => {
          if (!data.success) {
            this.setState({
              ...this.state,
              error: data.message,
              isLoading: false,
            });
          } else {
            localStorage.setItem("userName", data.userName);
            storeToken(data.token, () => {
              this.setState({
                ...this.state,
                input: { email: "", password: "" },
                success: true,
                reload: true,
                isLoading: false,
                completeProfile: data.completeProfile,
              });
              //window.location.reload();
            });
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("Error in Login");
          this.setState({
            ...this.state,
            error: "Error in Login",
            isLoading: false,
          });
        });
    }
  }

  displayError() {
    return (
      <div
        className="alert alert-danger p-2"
        style={{ display: this.state.error ? "" : "none" }}
      >
        {this.state.error}
      </div>
    );
  }

  displaySuccess() {
    return (
      <>
        <div
          className="alert alert-success p-2"
          style={{ display: this.state.success ? "" : "none" }}
        >
          Login Successful
        </div>
        {this.state.completeProfile ? (
          <Redirect to={this.state.redirectTo} />
        ) : (
          <Redirect to="/update-user-info" />
        )}
      </>
    );
  }
  displayLoading() {
    return (
      <div
        className="alert alert-info p-2"
        style={{ display: this.state.isLoading ? "" : "none" }}
      >
        Authenticating...
      </div>
    );
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter Password.";
    }
    if (input["password"].length < 6) {
      isValid = false;
      errors["password"] = "Password Should be greater than 6 character.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  loginForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="user-info-form">
          {this.state.error ? this.displayError() : ""}
          {this.state.success ? this.displaySuccess() : ""}
          {this.state.isLoading ? this.displayLoading() : ""}

          <div className="form-group">
            {/*<label htmlFor="email">Email Address:</label>*/}
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control border"
              placeholder="Enter a Mobile Number Or Email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group">
            {/*<label htmlFor="password">Password:</label>*/}
            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              onKeyUp={this.handleCapsLock}
              className="form-control border"
              placeholder="Enter a Password"
              id="password"
            />

            <div className="text-danger">{this.state.errors.password}</div>
          </div>

          <div className="mb-4 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <label className="form-check-label text-muted">
                <input type="checkbox" className="form-check-input" />
                Keep me signed in
              </label>
            </div>
            {/* <Link to="/forgot-password" className="auth-link text-danger">
              Forgot password?
            </Link> */}
          </div>
          <div className="mt-3 text-center">
            <button
              className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn w-75"
              type="submit"
              value="submit"
            >
              SIGN IN
            </button>
          </div>

          <div className="text-center pt-2">
            <p style={{ color: "#d1d1d1", fontSize: "22px" }}>
              or sign in with
            </p>
          </div>

          <div className="mb-2 text-center">
            <img
              src={Facebook}
              height={30}
              style={{
                backgroundColor: "blue",
                padding: "6px 9px",
                marginRight: "6px",
              }}
            />
            <img
              src={Google}
              height={30}
              style={{
                backgroundColor: "red",
                padding: "6px",
                marginRight: "6px",
              }}
            />
          </div>

          <div className="text-center mt-4 font-weight-light">
            Don't have an account? {"  "}
            <Link to="/register" className="text-primary">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="m-auto" style={{ paddingTop: "30px" }}>
            <div
              className="card card-signin "
              style={{
                margin: "auto",
                /*marginLeft: "-3rem",*/ maxWidth: "35rem",
              }}
            >
              <div className="card-body">
                <p className="card-title" style={{ color: "red" }}>
                  Bidz<span style={{ color: "#007bff" }}>Z</span>.in
                </p>
                <div style={{ fontSize: "1.8em" }}>
                  Hello! let's get started
                </div>
                <p style={{ color: "#d1d1d1", fontSize: "22px" }}>
                  Sign In to continue
                </p>
                {this.loginForm()}
              </div>
            </div>
            <NotificationContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
