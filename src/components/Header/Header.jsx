import * as React from "react";
import DesktopNav from "../NavBar/DesktopNav";
import MainLogo from "../MainLogo/MainLogo";
import { SimpleDivAnimation } from "../../animation/SimpleTransitionAnimation";

const Header = (props) => {
    const REM_UNIT = 16; //1rem = 16px

    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        let header;
        if (viewportWidth >= 48 * REM_UNIT) {
            header =
                <SimpleDivAnimation>
                    <header>
                        <MainLogo/>
                        <DesktopNav/>
                    </header>
                </SimpleDivAnimation>;
        } else {
            header =
                <SimpleDivAnimation>
                    <header>
                        <MainLogo/>
                    </header>
                </SimpleDivAnimation>;
        }
        return header;
    }
};

export default Header;