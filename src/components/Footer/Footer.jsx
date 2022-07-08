import * as React from "react";
import { SimpleDivAnimation, SimpleSectionAnimation } from "../../animation/SimpleTransitionAnimation";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = (props) => {
    return (
        <footer>
            <SimpleDivAnimation>
                <section id="social-media">
                    <SimpleSectionAnimation>
                        <p className="main-font">Stay up to date</p>
                        <SocialMedia/>
                    </SimpleSectionAnimation>
                </section>
            </SimpleDivAnimation>
            <SimpleDivAnimation>
                <p id='license'>This independent TEDx event is operated under license from TED</p>
            </SimpleDivAnimation>
        </footer>
    );
};

export default Footer;