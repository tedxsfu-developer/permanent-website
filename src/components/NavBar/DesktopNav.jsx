import React from "react";
import Menu from "./Menu";

const DesktopNav = (props) => {
    return (
        <div id='desktop-nav' className='fade-slide-in'>
            {/*<DefaultButton link="/opportunity"*/}
            {/*               label="Opportunities"*/}
            {/*               isInternal={true}*/}
            {/*               className='transparent'*/}
            {/*>*/}
            {/*    <img src={arrow_right} alt="Check out opportunities with TEDxSFU" width="16" height="16"*/}
            {/*         className="filter-white"/>*/}
            {/*</DefaultButton>*/}
            {/*<TicketButton/>*/}
            <Menu/>
        </div>
    );
};

export default DesktopNav;