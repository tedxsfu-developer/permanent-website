import React from "react";
import { Link } from "gatsby";
import Teams from "../../content/teams";

const DesktopTeamNav = (props) => {
    return (
        <nav id='desktop-team-nav' className='look-through'>
            {Teams.map(team => <Link to={`#${team.id}`} className='nav-item all-caps'>{team.name}</Link>)}
        </nav>
    );
}

export default DesktopTeamNav;