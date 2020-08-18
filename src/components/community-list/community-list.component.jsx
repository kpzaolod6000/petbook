import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { getCommunities } from "../../firebase/firebase.utils";
import { subscribeUserToCommunity } from "../../firebase/firebase.utils";
import { Link as RLink } from "react-router-dom";

import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { Avatar } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

class CommunityList extends React.Component {
    constructor() {
        super();
    
        this.state = {
            communities: []
        };

      }

      handleSubscription = communityId => {
        if(this.props.currentUser) {
            subscribeUserToCommunity(this.props.currentUser.id, communityId)
        }
        else {
            alert("Account is required for subscriptions.")
        }
      }



      async componentDidMount() {
        this.setState({communities: await getCommunities()});
      }

      render() {
          const { communities } = this.state;
          return (
            
            <Grid item container justify="center" spacing={3} >
                <Box m={1}>
                <RLink to="/community/form">
                    <Button variant="outlined" style={{ color: "#fcee1e" }}>
                        CREATE
                    </Button>
                </RLink>
            </Box>
                <List component="nav" style={{ background: "#3c3d3d"}} aria-label="contacts">
                    {communities.length > 0 ?
                        communities.map( el => (
                            <ListItem key={el.id}>
                                <ListItemIcon>
                                    <Avatar src={el.imageUrl} />
                                </ListItemIcon>
                                <ListItemText primary={el.name} />
                                <ListItemText primary={el.description}/>
                                <Button style={{ background: "#abb0b0", color:'#000000' }} onClick={() => this.handleSubscription(el.id)}>subscribe</Button>
                            </ListItem>
                    )): <span></span>}
                </List>
            </Grid>
          )
      }
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });  

export default connect(mapStateToProps)(CommunityList);