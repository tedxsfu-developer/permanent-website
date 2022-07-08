import React from "react";
import DefaultButton from "../Buttons/DefaultButton";
import Menu from "./Menu";

const MobileNav = (props) => {
    return (
        <div id='mobile-nav'>
            <DefaultButton link="/opportunity"
                           label="Opportunities ->"
                           isInternal={true}
                           className='default'
            />
            <Menu/>
        </div>
    );
};

export default MobileNav;