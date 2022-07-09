import * as React from "react";
import DesktopNav from "../NavBar/DesktopNav";
import MainLogo from "../MainLogo/MainLogo";

const Header = (props) => {
    const REM_UNIT = 16; //1rem = 16px

    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        let headerChildren;
        if (viewportWidth >= 48 * REM_UNIT) {
            headerChildren =
                <React.Fragment>
                    <MainLogo/>
                    <DesktopNav/>
                </React.Fragment>
        } else {
            headerChildren =
                <MainLogo/>
        }
        const header = <header className='fade-slide-in'>{headerChildren}</header>;
        return header;
    }
};

export default Header;