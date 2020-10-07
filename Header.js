import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person"
import WhatshotIcon from '@material-ui/icons/Whatshot';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
function Header() {
    return(
        <div className="header">
            {/* Icon button turns icons into clickable buttons*/}
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt=""
                />
            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="header__icon" />
            </IconButton>


        </div>
    )

}

export default Header;