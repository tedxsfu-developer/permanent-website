import React, { useState } from "react";
import expand_up from "../../images/expand_less.svg";
import expand_down from "../../images/expand_more.svg";
import IconButton from "../Buttons/IconButton";

const MobileSpeakerBio = ({ speaker }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleBioClick = () => {
        setIsExpanded(!isExpanded);
    }

    const expandUpButton =
        <IconButton
            imgSrc={expand_up}
            alt="Read speaker bio"
            label="Read bio"
            aria-expanded="false"
            aria-controls={speaker.name}
            className="no-border toggle icon-button"
            notShowLabel={false}
        />;

    const expandDownButton =
        <IconButton
            imgSrc={expand_down}
            alt="Close speaker bio"
            label="Close bio"
            aria-expanded="true"
            aria-controls={speaker.name}
            className="no-border toggle icon-button"
            notShowLabel={false}
        />;

    return (
        <React.Fragment>
            <img src={speaker.img.mobile.src}
                 alt={speaker.name}
                 width={speaker.img.mobile.width}
                 height={speaker.img.mobile.height}
                 className='full-screen'/>
            <article id={speaker.name}
                     className={`speaker-bio ${isExpanded ? "expanded look-through" : "collapsed"}`}
                     role="button"
                     tabIndex={-1}
                     onClick={handleBioClick}
                     onKeyDown={handleBioClick}
            >
                {!isExpanded && expandUpButton}
                <h2 className='talk-title'>{speaker.talkTitle}</h2>
                <div>
                    <h2 className='speaker-name'>{speaker.name}</h2>
                    <h3 className='all-caps speaker-title'>{speaker.title}</h3>
                </div>
                <p className='intro'>{speaker.intro}</p>
                {isExpanded && expandDownButton}
            </article>
        </React.Fragment>
    );
}

export default MobileSpeakerBio;