import React from "react";
import { Link } from "gatsby";
import Teams from "../../content/teams";

const DesktopTeamNav = (props) => {
    return (
        <nav id='mobile-team-nav'>
            {Teams.map(team => <Link to={`/team/${team.id}`} className='nav-item all-caps'>{team.name}</Link>)}
        </nav>
    );
}

export default DesktopTeamNav;