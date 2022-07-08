import React from "react";
import DefaultButton from "../Buttons/DefaultButton";
import Menu from "./Menu";
import arrow_right from "../../images/arrow_forward.svg";

const MobileNav = (props) => {
    return (
        <div id='mobile-nav'>
            <DefaultButton link="/opportunity"
                           label="Opportunities"
                           isInternal={true}
                           className='transparent'
            >
                <img src={arrow_right} alt="Check out opportunities with TEDxSFU" width="16" height="16"
                     className="filter-white"/>
            </DefaultButton>
            <Menu/>
        </div>
    );
};

export default MobileNav;