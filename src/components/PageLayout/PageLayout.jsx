import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MobileNav from "../NavBar/MobileNav";
import SimpleTextLink from "../SimpleTextLink/SimpleTextLink";
import StickyNotification from "../StickyNotification/StickyNotification";

const PageLayout = (props) => {
    const REM_UNIT = 16; //1rem = 16px
    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        let pageLayout;
        if (viewportWidth >= 48 * REM_UNIT) {
            pageLayout = (
                <React.Fragment>
                    <StickyNotification><p>TEDxSFUSalon — Summer 2022 is on July 30th. <SimpleTextLink
                        link="https://www.eventbrite.ca/e/tedxsfusalon-summer-2022-tickets-380130188627"
                        isInternal={false}
                        shouldOpenInNewTab={true}
                    >Get your <em>free</em> ticket now!</SimpleTextLink></p></StickyNotification>
                    <Header/>
                    {props.children}
                    <Footer/>
                </React.Fragment>
            );
        } else {
            pageLayout = (
                <React.Fragment>
                    <StickyNotification><p>TEDxSFUSalon — Summer 2022 is on July 30th. <SimpleTextLink
                        link="https://www.eventbrite.ca/e/tedxsfusalon-summer-2022-tickets-380130188627"
                        isInternal={false}
                        shouldOpenInNewTab={true}
                    >Get your <em>free</em> ticket now!</SimpleTextLink></p></StickyNotification>
                    <Header/>
                    <MobileNav/>
                    {props.children}
                    <Footer/>
                </React.Fragment>
            );
        }
        return pageLayout;
    } else {
        return <></>
    }
}

export default PageLayout;