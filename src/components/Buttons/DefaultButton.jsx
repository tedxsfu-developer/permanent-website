import React from "react";
import { Link } from "gatsby";

const DefaultButton = (props) => {
    const className = `button ${props.className}`;
    const button = props.isInternal
        ? <Link to={props.link} className={className}>{props.label}</Link>
        :
        <a className={className}
           href={props.link}
           {...(props.id && { id: props.id })}
           {...(props.shouldOpenInNewTab && { target: "_blank" })}
           rel="noopener noreferrer"
        >
            {props.label}
        </a>;
    return button;
};

export default DefaultButton;