import React from "react";
import { Link, Redirect } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { signup } from "./helper/userHelper";
import Facebook from "../../assets/icons/facebook-f-brands.svg";
import Google from "../../assets/icons/google-brands.svg";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {},
      success: false,
      error: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signupForm = this.signupForm.bind(this);
    this.displayError = this.displayError.bind(this);
    this.displaySuccess = this.displaySuccess.bind(this);
    this.handleTermsChange = this.handleTermsChange.bind(this);
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

  handleTermsChange() {
    let input = this.state.input;
    input["terms"] = !input["terms"];
    this.setState({
      input,
      error: "",
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      signup({
        firstName: this.state.input["firstName"],
        lastName: this.state.input["lastName"],
        mobileNumber: this.state.input["mobileNumber"],
        email: this.state.input["email"],
        password: this.state.input["password"],
        confirmPassword: this.state.input["confirmPassword"],
      })
        .then((data) => {
          if (!data.success) {
            this.setState({
              ...this.state,
              error: data.message,
              loading: false,
            });
          } else {
            this.setState({
              ...this.state,
              input: {
                firstName: "",
                lastName: "",
                mobileNumber: "",
                email: "",
                password: "",
                confirmPassword: "",
              },
              success: true,
              message: data.message,
              loading: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("Error in signup");
          this.setState({
            ...this.state,
            error: "Registration Error!",
            loading: false,
          });
        });
    }
  }

  displayError() {
    return (
      <div
        className="alert alert-danger"
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
          {this.state.message} <Link to={"/login"}>Login Here.</Link>
        </div>
        <Redirect to="/login" />
      </>
    );
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["firstName"]) {
      isValid = false;
      errors["firstName"] = "Please enter your First Name.";
    }

    if (!input["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter your Last Name.";
    }
    if (!input["mobileNumber"]) {
      isValid = false;
      errors["mobileNumber"] = "Please enter your mobile Number.";
    } else if (input["mobileNumber"].length < 10) {
      isValid = false;
      errors["mobileNumber"] = "Please enter valid mobile number.";
    } else if (phonenumber(input["mobileNumber"])) {
      isValid = false;
      errors["mobileNumber"] = "Please enter valid mobile number.";
    }
    function phonenumber(inputtxt) {
      var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      return !!inputtxt.match(phoneno);
    }

    if (!input["terms"]) {
      isValid = false;
      errors["terms"] = "Please Accept Terms and conditions.";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter Password.";
    } else if (input["password"].length < 6) {
      isValid = false;
      errors["password"] = "Password Should be greater than 6 character.";
    }

    if (!input["confirmPassword"]) {
      isValid = false;
      errors["confirmPassword"] = "Please Confirm Password.";
    } else if (input["confirmPassword"].length < 6) {
      isValid = false;
      errors["confirmPassword"] =
        "Password Should be greater than 6 character.";
    }

    if (input["password"] !== input["confirmPassword"]) {
      isValid = false;
      errors["password"] = "Password and confirm password not matching";
      errors["confirmPassword"] = "Password and confirm password not matching";
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

  signupForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="user-info-form">
          {this.state.error ? this.displayError() : ""}
          {this.state.success ? this.displaySuccess() : ""}
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  value={this.state.input.firstName}
                  onChange={this.handleChange}
                  className="form-control border"
                  placeholder="First name"
                  id="firstName"
                />

                <div className="text-danger">{this.state.errors.firstName}</div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  value={this.state.input.lastName}
                  onChange={this.handleChange}
                  className="form-control border"
                  placeholder="Last name"
                  id="lastName"
                />

                <div className="text-danger">{this.state.errors.lastName}</div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="mobileNumber"
              value={this.state.input.mobileNumber}
              onChange={this.handleChange}
              className="form-control border"
              placeholder="Phone"
              id="mobileNumber"
            />
            <div className="text-danger">{this.state.errors.mobileNumber}</div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control border"
              placeholder="Enter email"
              id="email"
            />
            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group">
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

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={this.state.input.confirmPassword}
              onChange={this.handleChange}
              onKeyUp={this.handleCapsLock}
              className="form-control border"
              placeholder="Confirm Password"
              id="confirmPassword"
            />

            <div className="text-danger">
              {this.state.errors.confirmPassword}
            </div>
          </div>

          <div className="form-check pt-2">
            <label className="form-check-label text-muted">
              <input
                type="checkbox"
                name="terms"
                checked={!!this.state.input.terms}
                onChange={this.handleTermsChange}
                className="form-check-input"
              />
              I accept the <Link to="#">Terms of Use</Link> &{" "}
              <Link to="#">Privacy Policy.</Link>
            </label>
            <div className="text-danger">{this.state.errors.terms}</div>
          </div>

          <div className="mt-3 text-center">
            <button
              className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn w-75"
              type="submit"
              value="Submit"
            >
              SIGN UP
            </button>
          </div>

          <div className="text-center pt-2">
            <p style={{ color: "#d1d1d1", fontSize: "22px" }}>
              or sign up with
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
              alt="Facebook"
            />
            <img
              src={Google}
              height={30}
              style={{
                backgroundColor: "red",
                padding: "6px",
                marginRight: "6px",
              }}
              alt="Google"
            />
          </div>

          <div className="text-center mt-4 font-weight-light">
            Already have an account? {"  "}
            <Link to="/login" className="text-primary">
              Sign In
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
                <div style={{ fontSize: "1.8em" }}>CREATE ACCOUNT</div>
                <p style={{ color: "#d1d1d1", fontSize: "22px" }}>
                  Please fill in this form to create an account
                </p>
                {this.success ? <Redirect to="/login" /> : this.signupForm()}
              </div>
            </div>
            <NotificationContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
