import React from "react";
import PageHelmet from "../components/PageHelmet";
import PageHelmets from "../content/pageHelmets";
import PageLayout from "../components/PageLayout/PageLayout";
import TicketIframe from "../components/TicketIframe/TicketIframe";

const Ticket = () => {
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.speakers.pageTitle}
                canonical={PageHelmets.speakers.canonical}
                description={PageHelmets.speakers.description}/>
            <PageLayout>
                <main id='tickets-eventbrite'>
                    <TicketIframe/>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default Ticket;