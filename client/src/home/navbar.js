import * as React from "react";
import { Link, Toolbar, Typography } from "@mui/material";
import { link, navbarToolbar, title, titleToolbar } from "./styles";

const Navbar = (props) => {
  const { sections } = props;

  return (
    <React.Fragment id="">
      {/* TITLE */}
      <header class="header">

    <a href="#" class="logo"> <i class="fas fa-heartbeat"></i> ThincHealth. </a>

    {/* <nav class="navbar">
        <a href="#home">home</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#doctors">doctors</a>
        <a href="#book">book</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
    </nav> */}

    <div id="menu-btn" class="fas fa-bars"></div>

</header>
    </React.Fragment>
  );
};

export default Navbar;
