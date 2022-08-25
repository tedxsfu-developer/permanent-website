import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import TeamMemberBio from "../../components/TeamMemberBio/TeamMemberBio";
import PageHelmet from "../../components/PageHelmet";


const IndividualTeamContainer = ({ pageContext }) => {
    const { teamInfo } = pageContext;
    return (
        <React.Fragment>
            <PageHelmet
                pageTitle={`Meet ${teamInfo.name}`}
                canonical={`https://www.tedxsfu.com/team/${teamInfo.id}`}
                description={teamInfo.intro}/>
            <PageLayout>
                <main>
                    <div className='reverse-order'>
                        <h1>{teamInfo.name}</h1>
                        <h2 className='all-caps'>Meet the team</h2>
                    </div>
                    <p>{teamInfo.intro}</p>
                    {teamInfo.members.map((member, index) =>
                        <TeamMemberBio member={member}/>
                    )}
                </main>
            </PageLayout>
        </React.Fragment>
    );
}

export default IndividualTeamContainer;