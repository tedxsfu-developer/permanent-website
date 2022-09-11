const path = require("path")
exports.createPages = async function ({ actions }) {
    const { createPage } = actions;
    const teamInfo = path.resolve(`./src/containers/IndividualTeamContainer/individualTeamContainer.jsx`);
    require("./src/content/teams").forEach((currentTeamInfo) => {
        createPage({
            path: `/team/${currentTeamInfo.id}`,
            component: teamInfo,
            context: {
                teamInfo: currentTeamInfo
            },
        });
    });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /react-eventbrite-popup-checkout/,
                    use: loaders.null(),
                },
            ],
        },
    });
};