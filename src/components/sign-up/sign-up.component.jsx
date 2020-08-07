import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      fechaNacimiento: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword,
      fechaNacimiento,
    } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName, fechaNacimiento });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        fechaNacimiento: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      fechaNacimiento,
    } = this.state;
    return (
      <Card variant="outlined">
        <CardContent>
          <div className="sign-up">
            <Typography color="textPrimary" variant="h5">
              I do not have an account
            </Typography>
            <br />
            <Typography color="textPrimary" variant="body1">
              Sign up with your email and password
            </Typography>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
              />
              <FormInput
                type="date"
                name="fechaNacimiento"
                value={fechaNacimiento}
                onChange={this.handleChange}
                label=""
                required
              />
              <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default SignUp;
