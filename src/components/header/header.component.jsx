import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import PrimarySearchAppBar from "./../../pages/homepage/components/PrimarySearchAppBar";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    {console.log(currentUser)}
    {/* 
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div> */}
    <PrimarySearchAppBar></PrimarySearchAppBar>
  </div>
);

//mapStateToProps es la funcion que va a recibir el state currentUser como prop
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
