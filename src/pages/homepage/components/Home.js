import React from "react";
import { Link as RLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Hidden, CardMedia } from "@material-ui/core";
import Content from "../../../components/user-post/Content";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const dogURL = "https://pbs.twimg.com/media/DpKQCg1VAAUyGmu.jpg";
  const classes = useStyles();
  return (
    <Box>
      <br />
      <Grid item container justify="center" spacing={3}>
        <Grid item xs={12} md={"auto"}>
          <Content />
        </Grid>
        <Hidden only={["xs", "sm", "md"]}>
          <Grid item md={3}>
            <Paper className={classes.paper}>
              HOLA
              <br />
              <RLink to="/Profile" style={{ textDecoration: "none" }}>
                <Box color="text.primary">/Profile</Box>
              </RLink>
              <Card>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 500, maxWidth: "300" }}
                    image={dogURL}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
}
