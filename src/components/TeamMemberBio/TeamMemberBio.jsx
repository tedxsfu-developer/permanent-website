import React from "react";

const TeamMemberBio = ({ member }) => {
    return (
        <section>
            <img src={`${member.img.src}`} alt={member.name} width={member.img.width} height={member.img.height}/>
            <h2>{member.name} ({member.pronoun})</h2>
            <h3>{member.role}</h3>
            <p>{member.bio.intro}</p>
            <ul>{member.bio.funFacts.map(funFact => <li>{funFact}</li>)}</ul>
        </section>
    );
}

export default TeamMemberBio;