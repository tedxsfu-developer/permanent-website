import React, { useState } from "react";
import DefaultButton from "../Buttons/DefaultButton";
import DisabledButton from "../Buttons/DisabledButton";

import arrow_drop_down from "../../images/arrow_drop_down.svg";
import arrow_drop_up from "../../images/arrow_drop_up.svg";
import IconButton from "../Buttons/IconButton";

const OpportunityTable = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleDescriptionClick = () => {
        setIsExpanded(!isExpanded);
    }
    const dropDownButton =
        <IconButton
            imgSrc={arrow_drop_down}
            alt="Expand description of this opportunity"
            label="Expand"
            aria-expanded="false"
            aria-controls={props.opportunity.id}
            className="no-border toggle icon-button"
            noShow={true}
        />;

    const dropUpButton =
        <IconButton
            imgSrc={arrow_drop_up}
            alt="Collapse description of this opportunity"
            label="Collapse"
            aria-expanded="true"
            aria-controls={props.opportunity.id}
            className="no-border toggle icon-button"
            noShow={true}
        />;

    return (
        <React.Fragment>
            <div id={props.opportunity.id}
                 className={`opportunity-description ${isExpanded ? "expanded" : "collapsed"}`}
                 role="button"
                 tabIndex={-1}
                 onClick={handleDescriptionClick}
                 onKeyDown={handleDescriptionClick}
            >
                <div className="description-text">
                    {props.opportunity.description.split("\n").map((paragraph, index) => {
                        if (index === 0) {
                            return <p key={index} className='first-item'>{paragraph}</p>;
                        } else {
                            return <p key={index}>{paragraph}</p>;
                        }
                    })}
                </div>
                {isExpanded ? dropUpButton : dropDownButton}
            </div>

            {props.opportunity.status === "open" &&
                <DefaultButton
                    link={props.opportunity.application_link}
                    label="Click Here To Apply"
                    isInternal={false}
                    className='transparent'
                    shouldOpenInNewTab={true}
                />}
            {props.opportunity.status === "closed" &&
                <DisabledButton
                    link="https://google.com"
                    label="Application Closed"
                />}
            {props.opportunity.status === "upcoming" &&
                <DisabledButton
                    link="https://google.com"
                    label="Opening soon"
                />}
        </React.Fragment>
    );
}

export default OpportunityTable;