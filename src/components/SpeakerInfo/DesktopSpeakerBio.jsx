import React from "react";

const DesktopSpeakerBio = ({ speaker }) => {
    return (
        <React.Fragment>
            <img src={speaker.img.desktop.src}
                 alt={speaker.name}
                 width={speaker.img.desktop.width}
                 height={speaker.img.desktop.height}
                 className='full-screen'/>
            <article className='speaker-bio'>
                <h2 className='talk-title'>{speaker.talkTitle}</h2>
                <div>
                    <h2 className='speaker-name'>{speaker.name}</h2>
                    <h3 className='all-caps speaker-title'>{speaker.title}</h3>
                </div>
                <p className='intro'>{speaker.intro}</p>
            </article>
        </React.Fragment>
    );
}

export default DesktopSpeakerBio;