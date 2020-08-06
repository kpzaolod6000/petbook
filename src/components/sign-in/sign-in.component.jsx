import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    // const value = event.target.value, lo mismo para name
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <div className="sign-in">
            <Typography color="textPrimary">
              <h2>I already have an account</h2>
              <span>Sign in with your email and password</span>
            </Typography>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="email"
                type="email"
                handleChange={this.handleChange}
                value={this.state.email}
                label="email"
                required
              />
              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="password"
                required
              />
              <div className="buttons">
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton
                  type="button"
                  onClick={signInWithGoogle}
                  buttonPurpose="google-sign-in"
                >
                  {" "}
                  Sign in with Google
                </CustomButton>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    );
  } //Sign in es props.children
}

export default SignIn;
