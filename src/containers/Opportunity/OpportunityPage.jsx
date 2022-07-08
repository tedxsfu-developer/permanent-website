import React from "react";
import PageHelmet from "../../components/PageHelmet";
import OpportunityTable from "../../components/OpportunityTable/OpportunityTable";
import SimpleTextLink from "../../components/SimpleTextLink/SimpleTextLink";
import PageHelmets from "../../content/pageHelmets";
import { SimpleDivAnimation } from "../../animation/SimpleTransitionAnimation";
import OpportunityTableMobile from "../../components/OpportunityTable/OpportunityTableMobile";
import PageLayout from "../../components/PageLayout/PageLayout";

const OpportunityPage = () => {
    const REM_UNIT = 16; //1rem = 16px

    let willDisplayTable = false;
    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        willDisplayTable = viewportWidth >= 75 * REM_UNIT;
    }

    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.opportunity.pageTitle}
                canonical={PageHelmets.opportunity.canonical}
                description={PageHelmets.opportunity.description}
            />
            <PageLayout>
                <main id='opportunity' className='horizontally-centered'>
                    <SimpleDivAnimation>
                        <h1>Be a part of TEDxSFU 2022</h1>
                    </SimpleDivAnimation>

                    {willDisplayTable && <OpportunityTable/>}
                    {!willDisplayTable && <OpportunityTableMobile/>}

                    <h2 className='inline'>Want to partner with us?</h2>
                    <SimpleTextLink link="/partner" isInternal={true}>
                        Become our partner ->
                    </SimpleTextLink>
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default OpportunityPage;