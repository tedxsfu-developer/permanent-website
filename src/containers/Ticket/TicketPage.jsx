import React, { useEffect } from "react";
import PageHelmets from "../../content/pageHelmets";
import PageHelmet from "../../components/PageHelmet";
import PageLayout from "../../components/PageLayout/PageLayout";
import SimpleTextLink from "../../components/SimpleTextLink/SimpleTextLink";

const TicketPage = () => {
    const useImportScript = resourceUrl => {
        useEffect(() => {
            const script = document.createElement('script');
            script.src = resourceUrl;
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            }
        }, [resourceUrl]);
    };
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.tickets.pageTitle}
                canonical={PageHelmets.tickets.canonical}
                description={PageHelmets.tickets.description}/>
            <PageLayout>
                <main id='tickets-eventbrite' className='fade-slide-in'>
                    <h1 className='page-title'>Get Your Tickets To TEDxSFU 2022</h1>
                    <h2>Purchase your tickets below or get them directly on <SimpleTextLink
                        link="https://www.eventbrite.ca/e/tedxsfu-2022-reflection-tickets-416405629447"
                        isInternal={false}
                        shouldOpenInNewTab={true}
                    >Eventbrite</SimpleTextLink>
                    </h2>
                    <div id="eventbrite-widget-container-416405629447"></div>
                    {useImportScript("../../script/ticket.js")}
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default TicketPage;