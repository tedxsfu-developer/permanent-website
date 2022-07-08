import * as React from "react";
import PageHelmet from "../../components/PageHelmet";

import PageHelmets from "../../content/pageHelmets";
import PartnerWithUs from "../../content/partnerWithUs";
import CtaButton from "../../components/Buttons/CtaButton";
import PartnershipBenefitsTable from "../../components/PartnershipBenefitsTable/PartnershipBenefitsTable";
import { SimpleDivAnimation } from "../../animation/SimpleTransitionAnimation";
import PageLayout from "../../components/PageLayout/PageLayout";

const PartnerWithUsPage = () => {
    const convertToParagraphList = (rawText) => {
        return rawText.split('\n');
    }

    const overviewParagraphs = convertToParagraphList(PartnerWithUs.overview.content);

    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.partner.pageTitle}
                canonical={PageHelmets.partner.canonical}
                description={PageHelmets.partner.description}
            />
            <PageLayout>
                <SimpleDivAnimation>
                    <main id='partner-with-us' className='horizontally-centered'>
                        <h1>{PartnerWithUs.overview.title}</h1>

                        <section id="overview" className='partner-info first-item'>
                            {overviewParagraphs.map(paragraph => <p>{paragraph}</p>)}
                        </section>

                        <section id="past-sponsors" className='partner-info'>
                            <h2>{PartnerWithUs.pastSponsors.title}</h2>
                        </section>

                        <section id="our-audience" className='partner-info'>
                            <h2>{PartnerWithUs.audience.title}</h2>
                            <p>{PartnerWithUs.audience.content}</p>
                        </section>

                        <section id="partnership-benefits" className='partner-info'>
                            <h2>{PartnerWithUs.partnershipBenefits.title}</h2>
                            <p>{PartnerWithUs.partnershipBenefits.content}</p>
                            <PartnershipBenefitsTable/>
                            <p>{PartnerWithUs.closing.content}</p>
                        </section>
                        <CtaButton link="mailto:partner@tedxsfu.com"
                                   label="Let's connect"
                                   id="contact-pr"
                                   isInternal={false}
                                   shouldOpenInNewTab={false}
                        />
                    </main>
                </SimpleDivAnimation>
            </PageLayout>
        </React.Fragment>
    );
}

export default PartnerWithUsPage
