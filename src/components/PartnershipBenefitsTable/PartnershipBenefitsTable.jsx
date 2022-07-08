import React from "react";
import PartnerWithUs from "../../content/partnerWithUs";
import BenefitItem from "./BenefitItem";

const PartnershipBenefitsTable = (props) => {
    const benefits = PartnerWithUs.partnershipBenefits.benefits;
    return (
        <section id="benefits">
            {benefits.map((benefit) => {
                return (
                    <BenefitItem benefit={benefit}/>
                );
            })}
        </section>
    );
}

export default PartnershipBenefitsTable;