import React from "react";
import { useNavigate } from 'react-router-dom';
import Style from "./Header.module.css";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const Header = () => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const navigateToHome = () => {
    navigate('/home');
  };

  return (
    <div className={Style.header}>
      <IconButton onClick={navigateToProfile}>
        <PersonIcon fontSize="large" className={Style.header_logo} />
      </IconButton>

      <IconButton onClick={navigateToHome}>
        <WhatshotIcon
          fontSize="large"
          className={Style.header_logo && Style.tinder_logo}
        />
      </IconButton>

      <IconButton>
        <ForumIcon fontSize="large" className={Style.header_logo} />
      </IconButton>
    </div>
  );
};

export default Header;


