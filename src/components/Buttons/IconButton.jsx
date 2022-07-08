import React from "react";

const IconButton = (props) => {
    const { className, imgSrc, alt, label, noShow, onClick, ...rest } = props;
    return (
        <button className={className} onClick={onClick} {...rest}>
            <img src={imgSrc}
                 alt={alt}
                 width="16"
                 height="16"
            />
            <span {...(noShow && { className: 'no-show' })}>{label}</span>
        </button>
    );
}

export default IconButton;