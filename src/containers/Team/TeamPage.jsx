import React from "react";
import PageHelmet from "../../components/PageHelmet";
import PageHelmets from "../../content/pageHelmets";
import PageLayout from "../../components/PageLayout/PageLayout";
import DesktopTeamNav from "../../components/TeamNav/DesktopTeamNav";

import Teams from "../../content/teams";
import TeamBio from "../../components/TeamBio/TeamBio";
import MobileTeamNav from "../../components/TeamNav/MobileTeamNav";

const TeamPage = () => {
    const REM_UNIT = 16; //1rem = 16px

    let isDesktop = false;
    if (typeof window !== "undefined") {
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let isLandscape = viewportWidth > viewportHeight;
        isDesktop = isLandscape && viewportWidth >= 75 * REM_UNIT;
    }

    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={PageHelmets.team.pageTitle}
                canonical={PageHelmets.team.canonical}
                description={PageHelmets.team.description}/>
            <PageLayout>
                {isDesktop &&
                    <div className='big-container'>
                        <DesktopTeamNav/>
                        <main id='team' className='horizontally-centered fade-slide-in'>
                            <h1 className='page-title'>Meet the team</h1>
                            {Teams.map(team => <TeamBio team={team}/>)}
                        </main>
                    </div>
                }
                {!isDesktop &&
                    <React.Fragment>
                        <h1 className='team page-title'>Meet the team</h1>
                        <MobileTeamNav/>
                        <main id='team' className='horizontally-centered fade-slide-in'>
                            {Teams.map(team => <TeamBio team={team}/>)}
                        </main>
                    </React.Fragment>
                }
            </PageLayout>
        </React.Fragment>
    );
}

export default TeamPage;