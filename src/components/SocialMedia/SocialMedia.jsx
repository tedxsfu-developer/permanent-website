import React from "react";

import SocialMedia from "../../content/socialMedia";
import LinkedImageIcon from "../LinkedImageIcon/LinkedImageIcon";

const SocialMediaLink = () => {
    return (
        <div className="social-group flex">
            {SocialMedia.map((item) =>
                <LinkedImageIcon
                    key={item.name}
                    href={item.url}
                    src={item.logo}
                    alt={item.name}
                />
            )}
        </div>
    );
}

export default SocialMediaLink;