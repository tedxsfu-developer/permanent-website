import React, { useState, useEffect } from "react";
import LinkButton from "../Buttons/LinkButton";
import arrow_right from "../../images/arrow_forward.svg";
import Navigation from "./Navigation";
import Menu from "./Menu";

const DesktopNav = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = (event) => {
        setShowMenu(!showMenu);
    };

    const handleOutsideClick = (e) => {
        if (showMenu) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        const outsideNav = document.querySelector(".clickzone");
        outsideNav.addEventListener("click", handleOutsideClick);
        return () =>
            outsideNav.removeEventListener("click", handleOutsideClick);
    }, [showMenu]);

    return (
        <div id="desktop-nav" className="fade-slide-in">
            <LinkButton
                link="/tickets"
                label="Get Tickets"
                isInternal={true}
                className="transparent"
            >
                <img
                    src={arrow_right}
                    alt="Get your tickets to TEDxSFU 2022 Conference"
                    width="16"
                    height="16"
                    className="filter-white"
                />
            </LinkButton>
            <Menu
                id="menu-toggle"
                aria-label="Main menu"
                aria-controls="menu"
                aria-expanded={showMenu}
                handleClick={handleClick}
            />
            <Navigation
                id="menu"
                aria-labelledby="menu-toggle"
                aria-hidden={!showMenu}
                showMenu={showMenu}
            />
        </div>
    );
};

export default DesktopNav;
