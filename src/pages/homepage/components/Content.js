import React from "react";
import PostCard from "./PostCard";
import { Grid } from "@material-ui/core";

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

const postCardList = [
  {
    id: 1,
    comunityLogoURL:
      "https://styles.redditmedia.com/t5_2sx2i/styles/communityIcon_7fixeonxbxd41.png?width=256&s=1ecde8d0f7197fe3aa1b9d6eef5936f7401db607",
    comunityName: "unixporn",
    postUsername: "PettoBukko_usr_xx",
    postDate: today,
    postTitle: "[Awesome] Afternoon In A Perfect World",
    postMediaPictureURL: "https://i.redd.it/lqi18vjsy5f51.png",
  },
  {
    id: 2,
    comunityLogoURL:
      "https://media.tenor.com/images/d139e96072bae377be522258f7128881/tenor.gif",
    comunityName: "animegifs",
    postUsername: "PettoBukko_usr_yy",
    postDate: today,
    postTitle: "Mood",
    postMediaPictureURL:
      "https://i.pinimg.com/originals/24/40/8d/24408dbd5bf503ba838e5b9a65bd14e7.gif",
  },
];

const Content = () => {
  const getPostCard = (PostObj) => {
    return (
      <Grid item key={PostObj.id} xs={12}>
        <PostCard {...PostObj} />
        <br />
      </Grid>
    );
  };
  return (
    <Grid container spacing={0}>
      {postCardList.map((PostObj) => getPostCard(PostObj))}
    </Grid>
  );
};
export default Content;
