import React, { useState } from "react";

const DesktopSpeakerBio = ({ speaker }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleIntroClick = (event) => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
    }
    return (
        <React.Fragment>
            <img src={speaker.img.desktop.src}
                 alt={speaker.name}
                 width={speaker.img.desktop.width}
                 height={speaker.img.desktop.height}
                 className='full-screen'/>
            <div className='bio-container'>
                <article className='speaker-bio collapsed'>
                    {speaker.talk.shortTopicTitle &&
                        <h2 className='talk-title'>{speaker.talk.shortTopicTitle}</h2>}
                    <div>
                        <h2 className='speaker-name'>{speaker.name}</h2>
                        <h3 className='all-caps speaker-title'>{speaker.title}</h3>
                    </div>
                    <p className='intro'>{speaker.talk.shortIntro}</p>
                </article>
                {!isExpanded &&
                    <button className='talk-intro-toggle open all-caps' onClick={handleIntroClick}>
                        Read full intro
                    </button>
                }
                {isExpanded &&
                    <button className='talk-intro-toggle close all-caps' onClick={handleIntroClick}>
                        Close full intro
                    </button>
                }
                {isExpanded &&
                    <article className='speaker-bio expanded full-talk-intro'>
                        {speaker.talk.shortTopicTitle &&
                            <h2 className='talk-title'>{speaker.talk.fullTopicTitle}</h2>}
                        <div>
                            <h2 className='speaker-name'>{speaker.name}</h2>
                            <h3 className='all-caps speaker-title'>{speaker.title}</h3>
                        </div>
                        <p className='intro'>{speaker.talk.fullIntro}</p>
                    </article>
                }
            </div>
        </React.Fragment>
    );
}

export default DesktopSpeakerBio;