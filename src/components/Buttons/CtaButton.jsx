import React from "react";
import DefaultButton from "./DefaultButton";

const CtaButton = (props) => {
    const { className, ...rest } = props;
    return (
        <DefaultButton {...(props.id && { id: props.id })} className='cta' {...rest} />
    );
}

export default CtaButton;