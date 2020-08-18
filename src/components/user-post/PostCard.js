import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Avatar, CardMedia } from "@material-ui/core";

const PostCard = (props) => {
  const {
    comunityLogoURL,
    comunityName,
    postUsername,
    postDate,
    postTitle,
    postMediaPictureURL,
    id,
  } = props;
  const usrAndDate = `Posted by u/${postUsername}. ${postDate}`;
  return (
    <Card id={id}>
      <CardHeader
        avatar={<Avatar src={comunityLogoURL} />}
        title={comunityName}
        subheader={usrAndDate}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {postTitle}
        </Typography>
      </CardContent>
      <CardMedia style={{ height: "500px" }} image={postMediaPictureURL} />
      <CardActions>
        <Button size="small">Comments</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};
export default PostCard;
