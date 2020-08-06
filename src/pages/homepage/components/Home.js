import React from "react";
import { Link as RLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Hidden, Typography } from "@material-ui/core";
import Content from "./Content";
import Paper from "@material-ui/core/Paper";
// import Link from "@material-ui/core/Link";

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
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
}
