import React from "react";
import { SimpleDivAnimation } from "../../animation/SimpleTransitionAnimation";
import Opportunities from "../../content/opportunities";
import DescriptionSection from "./DescriptionSection";

const OpportunityTableMobile = (props) => {
    return (
        <SimpleDivAnimation>
            <div id="opportunity">
                {Opportunities.map((opportunity, index) => {
                    if (index === 0) {
                        return <DescriptionSection key={index} opportunity={opportunity} className='first-item'/>
                    } else {
                        return <DescriptionSection key={index} opportunity={opportunity}/>
                    }
                })}
            </div>
        </SimpleDivAnimation>
    );
}

export default OpportunityTableMobile;