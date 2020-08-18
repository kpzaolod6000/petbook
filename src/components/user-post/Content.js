import React from "react";
import PostCard from "./PostCard";
import { Grid } from "@material-ui/core";

const today = new Date().toISOString().split("T")[0];

const postCardList = [
  {
    id: 1,
    communityLogoURL:
      "https://styles.redditmedia.com/t5_2sx2i/styles/communityIcon_7fixeonxbxd41.png?width=256&s=1ecde8d0f7197fe3aa1b9d6eef5936f7401db607",
    communityName: "unixporn",
    postUsername: "PettoBukko_usr_xx",
    postDate: today,
    postTitle: "[Awesome] Afternoon In A Perfect World",
    postMediaPictureURL: "https://i.redd.it/lqi18vjsy5f51.png",
    comments: [
      {
        id: Math.random().toString(),
        userId: Math.random().toString(),
        username: Math.random().toString(36).substring(4),
        date: new Date(),
        msg: Math.random().toString(36).substring(1),
      },
      {
        id: Math.random().toString(),
        userId: Math.random().toString(),
        username: Math.random().toString(36).substring(4),
        date: new Date(),
        msg: Math.random().toString(36).substring(1),
      },
      {
        id: Math.random().toString(),
        userId: Math.random().toString(),
        username: Math.random().toString(36).substring(4),
        date: new Date(),
        msg: Math.random().toString(36).substring(1),
      },
      {
        id: Math.random().toString(),
        userId: Math.random().toString(),
        username: Math.random().toString(36).substring(4),
        date: new Date(),
        msg: Math.random().toString(36).substring(1),
      },
    ],
  },
  {
    id: 2,
    communityLogoURL:
      "https://media.tenor.com/images/d139e96072bae377be522258f7128881/tenor.gif",
    communityName: "animegifs",
    postUsername: "PettoBukko_usr_yy",
    postDate: today,
    postTitle: "Mood",
    postMediaPictureURL:
      "https://i.pinimg.com/originals/24/40/8d/24408dbd5bf503ba838e5b9a65bd14e7.gif",
    comments: [
      {
        id: Math.random().toString(),
        userId: Math.random().toString(),
        username: Math.random().toString(36).substring(4),
        date: new Date(),
        msg: Math.random().toString(36).substring(1),
      },
      {
        id: Math.random().toString(),
        userId: Math.random().toString(),
        username: Math.random().toString(36).substring(4),
        date: new Date(),
        msg: Math.random().toString(36).substring(1),
      },
      {
        id: Math.random().toString(),
        userId: Math.random().toString(),
        username: Math.random().toString(36).substring(4),
        date: new Date(),
        msg: Math.random().toString(36).substring(1),
      },
    ],
  },
];

const Content = () => {
  const getPostCard = (PostObj) => {
    // console.log(PostObj);
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
