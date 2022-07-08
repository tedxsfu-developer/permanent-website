import * as React from "react";
import PageHelmet from "../../components/PageHelmet";
import { SimpleDivAnimation } from "../../animation/SimpleTransitionAnimation";
import SimpleTextLink from "../../components/SimpleTextLink/SimpleTextLink";

import PageHelmets from "../../content/pageHelmets";
import PageLayout from "../../components/PageLayout/PageLayout";

const IndexPage = () => {
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.home.pageTitle}
                canonical={PageHelmets.home.canonical}
                description={PageHelmets.home.description}/>
            <PageLayout>
                <main id='home' className="horizontally-centered">
                    <section id="coming-soon" className='home-section'>
                        <SimpleDivAnimation>
                            <h1 className="main-heading font-bold main-font">
                                The TEDxSFU team is working hard putting together this year’s conference—details coming
                                in
                                August 2022.
                            </h1>
                        </SimpleDivAnimation>
                        <SimpleDivAnimation>
                            <SimpleTextLink link="#about-tedx" isInternal={true}>
                                What is TEDx? &darr;
                            </SimpleTextLink>
                        </SimpleDivAnimation>
                    </section>
                    <section id="about-tedx" className='home-section'>
                        <h2>What is TEDx?</h2>
                        <p>
                            In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a
                            program of local, self-organized events that bring people together to share a TED-like
                            experience. Our event is called TEDxSFU, where x = independently organized TED event. At our
                            TEDxSFU event, TED Talks video and live speakers will combine to spark deep discussion and
                            connection in a small group. The TED Conference provides general guidance for the TEDx
                            program, but individual TEDx events, including ours, are self-organized.
                        </p>
                        <SimpleTextLink link="https://www.ted.com/tedx"
                                        isInternal={false}>
                            Link to TEDx Program ->
                        </SimpleTextLink>
                    </section>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default IndexPage