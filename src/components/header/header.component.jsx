import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <PrimarySearchAppBar currentUser={currentUser}></PrimarySearchAppBar>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
