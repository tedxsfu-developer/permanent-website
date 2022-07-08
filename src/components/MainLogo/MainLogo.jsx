import { Link } from "gatsby";
import React from "react";

const MainLogo = () => {
    return (
        <Link to="/">
            <img
                id="site-logo"
                src="/images/logo.png"
                alt="TEDxSFU logo"
            />
        </Link>
    );
}

export default MainLogo;