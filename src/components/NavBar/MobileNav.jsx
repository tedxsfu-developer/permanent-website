import React, { useEffect, useState } from "react";
import LinkButton from "../Buttons/LinkButton";
import arrow_right from "../../images/arrow_forward.svg";
import Menu from "./Menu";
import Navigation from "./Navigation";
import ConferenceInfo from "../../content/conference";

const MobileNav = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.addEventListener('click', (event) => {
            if (showMenu) {
                setShowMenu(false);
            }
        })
    }, [showMenu]);

    return (
        <div id='mobile-nav' className={`fade-slide-in${showMenu ? ' full-screen' : ''}`}>
            <div className='fixed-container look-through'>
                <LinkButton link="/tickets"
                            label="Get Tickets"
                            isInternal={true}
                            className='transparent'
                >
                    <img src={arrow_right} alt="Get your tickets to TEDxSFU 2022 Conference" width="16" height="16"
                         className="filter-white"/>
                </LinkButton>
                {!showMenu && <Menu handleClick={handleClick}/>}
                {showMenu && <button id='close-menu' className='all-caps transparent'>Close</button>}
            </div>
            <div className='popup-nav'>
                {showMenu &&
                    <div className='conference-info'>
                        <p>{ConferenceInfo.date}, {ConferenceInfo.time}</p>
                        <p className='opaque-text'>{ConferenceInfo.venue}</p>
                    </div>
                }
                <Navigation showMenu={showMenu}/>
            </div>
        </div>
    );
};

export default MobileNav;