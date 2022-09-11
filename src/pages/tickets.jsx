import React from "react";
import PageHelmet from "../components/PageHelmet";
import PageHelmets from "../content/pageHelmets";
import PageLayout from "../components/PageLayout/PageLayout";
import TicketButton from "../components/TicketButton/TicketButton";

const Ticket = () => {
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.speakers.pageTitle}
                canonical={PageHelmets.speakers.canonical}
                description={PageHelmets.speakers.description}/>
            <PageLayout>
                <main id='tickets-eventbrite'>
                    <TicketButton/>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default Ticket;