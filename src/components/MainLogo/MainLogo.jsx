import { Link } from "gatsby";
import React from "react";

const MainLogo = () => {
    return (
        <Link to="/">
            <img
                className="site-logo"
                src="/images/logo.png"
                alt="TEDxSFU logo"
            />
        </Link>
    );
}

export default MainLogo;