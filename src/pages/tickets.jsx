import React from "react";
import PageHelmet from "../components/PageHelmet";
import PageHelmets from "../content/pageHelmets";
import PageLayout from "../components/PageLayout/PageLayout";
import { Helmet } from "react-helmet";

const Ticket = () => {
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.speakers.pageTitle}
                canonical={PageHelmets.speakers.canonical}
                description={PageHelmets.speakers.description}/>
            <Helmet>
                <noscript>{`<a href="https://www.eventbrite.ca/e/test-eventbrite-tickets-417409612387"
                             rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a>`}</noscript>
            </Helmet>
            <PageLayout>
                {/*<main id='tickets-eventbrite'>*/}
                {/*<TicketButton/>*/}
                {/*<div id="eventbrite-widget-container-417409612387"></div>*/}
                <button id="eventbrite-widget-modal-trigger-417409612387" type="button">Buy Tickets</button>
                {/*</main>*/}
            </PageLayout>
        </React.Fragment>
    );
}

export default Ticket;