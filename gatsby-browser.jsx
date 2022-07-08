import React from "react";
import PageWrapper from "./src/components/PageWrapper/PageWrapper";

import "./src/styles/global.sass";
import "./src/styles/imports.sass";

export const wrapPageElement = ({ element, ...props }) => {
    return (
        <PageWrapper {...props}>{element}</PageWrapper>
    );
}