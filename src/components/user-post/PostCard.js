import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { Avatar, CardMedia, Box } from "@material-ui/core";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import Comment from "./Comment";

const PostCard = (props) => {
  const {
    communityLogoURL,
    communityName,
    postUsername,
    postDate,
    postTitle,
    postMediaPictureURL,
    id,
    comments,
    currentUser,
  } = props;
  const usrAndDate = `Posted by u/${postUsername}. ${postDate}`;
  const [toggle, setToggle] = useState(false);

  return (
    <Card id={id}>
      <CardHeader
        avatar={<Avatar src={communityLogoURL} />}
        title={communityName}
        subheader={usrAndDate}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {postTitle}
        </Typography>
      </CardContent>
      <CardMedia style={{ height: "500px" }} image={postMediaPictureURL} />
      <CardActions>
        <Button size="small" onClick={() => setToggle(!toggle)}>
          Comments
        </Button>
        <Button size="small">Share</Button>
      </CardActions>
      <CardContent>
        {toggle ? (
          <Comment comments={comments} postId={id} currentUser={currentUser} />
        ) : (
          <Box />
        )}
      </CardContent>
    </Card>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(PostCard);
