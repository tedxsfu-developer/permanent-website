import React from "react";

import checkmark from "../../images/checkmark.svg";

const BenefitItem = (props) => {
    return (
        <div className="benefit-item">
            <img src={checkmark} alt="Partnership benefit" width="48" height="48"/>
            <p>{props.benefit}</p>
        </div>
    );
}

export default BenefitItem;