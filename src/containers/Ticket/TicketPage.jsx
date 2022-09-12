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
                pageTitle={PageHelmets.speakers.pageTitle}
                canonical={PageHelmets.speakers.canonical}
                description={PageHelmets.speakers.description}/>
            <PageLayout>
                <main id='tickets-eventbrite'>
                    <div id="eventbrite-widget-container-416405629447"></div>
                    {useImportScript("../../script/ticket.js")}
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default TicketPage;