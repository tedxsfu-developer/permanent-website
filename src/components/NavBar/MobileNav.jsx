import React from "react";
import DefaultButton from "../Buttons/DefaultButton";
import arrow_right from "../../images/arrow_forward.svg";
import Menu from "./Menu";

const MobileNav = (props) => {
    return (
        <div id='mobile-nav' className='fade-slide-in look-through'>
            <DefaultButton link="/tickets"
                           label="Get Tickets"
                           isInternal={true}
                           className='transparent'
            >
                <img src={arrow_right} alt="Get your tickets to TEDxSFU 2022 Conference" width="16" height="16"
                     className="filter-white"/>
            </DefaultButton>
            <Menu/>
        </div>
    );
};

export default MobileNav;