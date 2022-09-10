import React, { useState } from "react";
import hamburger_menu from "../../images/menu.svg";
import IconButton from "../Buttons/IconButton";

const Menu = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const menu = <nav className='look-through'></nav>;
    const handleClick = () => {
        console.log(`showMenu = ${showMenu}`);
        setShowMenu(!showMenu);
    }
    return (
        <React.Fragment>
            {showMenu && menu}
            <IconButton id="menu"
                        imgSrc={hamburger_menu}
                        alt="menu"
                        label='Menu'
                        className={`no-border fade-slide-in ${props.className}`}
                        notShowLabel={false}
                        onClick={handleClick}
            />
        </React.Fragment>
    );
};

export default Menu;