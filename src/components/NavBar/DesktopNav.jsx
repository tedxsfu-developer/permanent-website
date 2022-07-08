import React from "react";
import DefaultButton from "../Buttons/DefaultButton";
import Menu from "./Menu";

const DesktopNav = (props) => {
    return (
        <div id='desktop-nav'>
            <DefaultButton link="/opportunity"
                           label="Opportunities ->"
                           isInternal={true}
                           className='default'
            />
            <Menu/>
        </div>
    );
};

export default DesktopNav;