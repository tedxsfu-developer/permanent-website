import React from "react";

const SponsorBio = ({ sponsor }) => {
    return (
        <li className='sponsor-bio'>
            <img src={sponsor.logo.src} alt={sponsor.name} width={sponsor.logo.width} height={sponsor.logo.height}/>
            <h3>{sponsor.name}</h3>
        </li>
    );
}

export default SponsorBio;