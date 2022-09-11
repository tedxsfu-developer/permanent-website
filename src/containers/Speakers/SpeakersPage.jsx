import React from "react";
import PageHelmets from "../../content/pageHelmets";
import PageHelmet from "../../components/PageHelmet";
import PageLayout from "../../components/PageLayout/PageLayout";
import Speakers from "../../content/speakers";
import SpeakerInfo from "../../components/SpeakerInfo/SpeakerInfo";

const SpeakersPage = () => {
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.speakers.pageTitle}
                canonical={PageHelmets.speakers.canonical}
                description={PageHelmets.speakers.description}/>
            <PageLayout>
                <main id='speakers'>
                    <h1 className='hidden'>TEDxSFU 2022 Speakers</h1>
                    <ul className='speaker-list'>
                        {Speakers.map(speaker =>
                            <li className='speaker-item speaker-container'>
                                <SpeakerInfo speaker={speaker}/>
                            </li>)}
                    </ul>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default SpeakersPage;