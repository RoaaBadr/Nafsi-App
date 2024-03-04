import React, { useState } from "react";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import Box from "@mui/material/Box";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import { Outlet, NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    // {
    //   text: "About",
    //   icon: <InfoIcon />,
    //   link: "/",
    // },
    {
      text: "Videos",
      icon: <VideoLibraryRoundedIcon />,
      link: "/video",
    },
    {
      text: "Articles",
      icon: <NewspaperRoundedIcon />,
      link: "/blogs",
    },
    // {
    //   text: "Chat",
    //   icon: <QuestionAnswerRoundedIcon />,
    // },
    // {
    //   text: "Contact",
    //   icon: <AlternateEmailRoundedIcon />,
    // },
  ];
  return (
    <>
      <nav>
        <NavLink to="/" className={"logo"}>
          <div className="nav-logo-container">
            <p className="fansi">Nafsi</p>
          </div>
        </NavLink>
        <div className="navbar-links-container">
          <div className="topnav-centered">
            <NavLink  to="/">
              Home
            </NavLink>
            <NavLink  to="/blogs">
              Articles
            </NavLink>
            <NavLink  to="/video">
              Videos
            </NavLink>
          </div>
          <div className="topnav-right">
            <NavLink to="/log-in">Log In</NavLink>
            <button className="primary-button">
              <NavLink to="/sign-up">Sign Up</NavLink>
            </button>
          </div>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon><Link to={item.link}>{item.icon}</Link></ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
