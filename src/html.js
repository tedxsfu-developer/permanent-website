import React from "react";
import PropTypes from "prop-types";

import black_logo from "./images/black_logo.png";

export default function HTML(props) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            {props.headComponents}
            <link rel="icon"
                  type="image/png"
                  href={black_logo}/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"/>
        </head>
        <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
