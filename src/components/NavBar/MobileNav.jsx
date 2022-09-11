import React from "react";
import Menu from "./Menu";
import TicketButton from "../TicketButton/TicketButton";

const MobileNav = (props) => {
    return (
        <div id='mobile-nav' className='fade-slide-in look-through'>
            {/*<DefaultButton link="/opportunity"*/}
            {/*               label="Opportunities"*/}
            {/*               isInternal={true}*/}
            {/*               className='transparent'*/}
            {/*>*/}
            {/*    <img src={arrow_right} alt="Check out opportunities with TEDxSFU" width="16" height="16"*/}
            {/*         className="filter-white"/>*/}
            {/*</DefaultButton>*/}
            <TicketButton/>
            <Menu/>
        </div>
    );
};

export default MobileNav;