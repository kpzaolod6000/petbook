import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import FormSelect from '../form-select/form-select.component';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { getCommunitiesFromUser} from "../../firebase/firebase.utils";
import { createPostDocument } from "../../firebase/firebase.utils";

import "./post-form.styles.scss";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class PostForm extends React.Component {
  constructor() {
    super();

    this.state = {
      postTitle: '',
      subscriptions: [],
      communityId: '',
      communityName: '',
      image: {}
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { 
      postTitle,
      communityId,
      image,
      communityName
    } = this.state;

    const {
      id,
      displayName
    } = this.props.currentUser


    createPostDocument(postTitle, communityId, image, communityName, id, displayName)

  };

  handleFileChange = event => {
    this.setState({ image: event.target.files[0]});
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  async componentDidMount () {
    if(this.props.currentUser){
      await this.setState({subscriptions: await getCommunitiesFromUser(this.props.currentUser.id)})
      console.log(this.state.subscriptions)
      /* this.state.subscriptions.length > 0 ? this.setState({communityId: this.state.subscriptions[0].id}): console.log("No subscriptions"); */
    }
    
  }

  render() {
    const {
      postTitle,
      subscriptions
    } = this.state;
    return (
      <Card variant="outlined">
        <CardContent>
          <div className="sign-up">
            <Typography color="textPrimary" variant="h5">
              Create a Post
            </Typography>
            <br />
            <Typography color="textPrimary" variant="body1">
              Behave like you would in real life
            </Typography>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="postTitle"
                value={postTitle}
                onChange={this.handleChange}
                label="Title"
                required
              />
              <FormSelect
                name = 'communityId'
                type = 'text'
                handleChange = {this.handleChange}
                options = {
                  subscriptions.map( subscription => {
                    return {
                      value: subscription.id,
                      label: subscription.name
                    }
                  })
                }
                label = 'Select a Community'
                required
              />
              <Typography color="textPrimary" variant="body1">
                Select an image to include in your post
              </Typography>
              <input 
                type="file"
                name="image"
                accept="image/x-png,image/jpeg,image/gif"
                onChange={this.handleFileChange}
              />
              <br />
              <br />
              <CustomButton type="submit">SUBMIT</CustomButton>
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

export default connect(mapStateToProps)(PostForm);
