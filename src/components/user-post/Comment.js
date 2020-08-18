import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { addCommentToPostDocument_i } from "../../firebase/firebase.utils";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Comment(props) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { comments, postId, currentUser } = props;

  const onSubmit = async (data) => {
    if (currentUser) {
      await addCommentToPostDocument_i({
        postId: postId,
        msg: data.commentMsg,
        date: new Date(),
        userId: currentUser.id,
      });
    }
  };

  const showComments = () => {
    if (comments) {
      return (
        <div className={classes.root}>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="commentMsg"
              label="Comment"
              name="commentMsg"
              type="text"
              inputRef={register}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
          {comments.map((cmt) => (
            <Box key={cmt.id}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item key={cmt.userId}>
                  <Avatar>{cmt.username[0]}</Avatar>
                </Grid>
                <Grid item key={cmt.id} xs>
                  <Typography color="textSecondary">
                    {cmt.username}{" "}
                    {Math.round((new Date() - cmt.date) / 1000).toString() +
                      " seconds ago."}
                  </Typography>
                  <Typography>{cmt.msg}</Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </div>
      );
    }
  };

  return showComments();
}
