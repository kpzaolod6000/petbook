import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import FormSelect from '../form-select/form-select.component';
import { connect } from "react-redux";
import { createCommunityDocument }  from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./communityForm.styles.scss";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class CommunityForm extends React.Component {
  constructor() {
    super();

    this.state = {
      communityName: '',
      description: '',
      topic: 'dog',
      image: {}
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {

      createCommunityDocument(this.state, this.props.currentUser);

      this.setState({
        communityName: '',
        description: '',
        topic: 'dog',
        image: {}
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleFileChange = event => {
    this.setState({ image: event.target.files[0]});
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      communityName,
      description
    } = this.state;
    return (
      <Card variant="outlined">
        <CardContent>
          <div className="sign-up">
            <Typography color="textPrimary" variant="h5">
              Create a Community
            </Typography>
            <br />
            <Typography color="textPrimary" variant="body1">
              Fill the blanks in order to create a community
            </Typography>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="communityName"
                value={communityName}
                onChange={this.handleChange}
                label="Community name"
                required
              />
              <FormInput
                type="textarea"
                name="description"
                value={description}
                onChange={this.handleChange}
                label="Description about your community"
                required
              />
              <FormSelect
                name = 'topic'
                type = 'text'
                handleChange = {this.handleChange}
                options = {[
                    {
                        value: 'dog', label:'Dogs 🐕'
                    },
                    {
                        value: 'cat', label:'Cats 🐈'
                    },
                    {
                        value: 'parrot', label:'Parrots 🦉'
                    },
                    {
                      value: 'hamster', label:'Hamsters 🐹'
                    },
                    {
                        value: 'other', label:'Other 🦖'
                    }
                ]}
                label = 'Main Topic'
                required
              />
              <Typography color="textPrimary" variant="body1">
                Select an image to use as logo for the community
              </Typography>
              <input 
                type="file"
                name="communityImage"
                accept="image/x-png,image/jpeg"
                onChange={this.handleFileChange}
              />
              <br />
              <br />
              <CustomButton type="submit">CREATE COMMUNITY</CustomButton>
            </form>
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CommunityForm);
