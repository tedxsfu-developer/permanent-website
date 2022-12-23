module.exports = {
    siteMetadata: {
        title: `TEDxSFU`,
        siteUrl: `https://www.tedxsfu.com/`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "opportunity",
                "path": `${__dirname}/src/content/opportunities`
            },
        }
    ]
};