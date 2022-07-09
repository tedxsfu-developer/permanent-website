import React from "react";
import hamburger_menu from "../../images/menu.svg";
import IconButton from "../Buttons/IconButton";

const Menu = (props) => {
    return (
        <IconButton id="menu"
                    imgSrc={hamburger_menu}
                    alt="menu"
                    label='Menu'
                    className={`no-border ${props.className}`}
                    noShow={false}/>
    );
};

export default Menu;