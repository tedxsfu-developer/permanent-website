import React, { useEffect } from "react";
import PageHelmets from "../../content/pageHelmets";
import PageHelmet from "../../components/PageHelmet";
import PageLayout from "../../components/PageLayout/PageLayout";

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
                <main id='tickets-eventbrite'>
                    <h1 className='page-title'>Get Your Tickets To TEDxSFU 2022</h1>
                    <div id="eventbrite-widget-container-416405629447"></div>
                    {useImportScript("../../script/ticket.js")}
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default TicketPage;