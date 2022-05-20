require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: "Matthys.dev",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ["UCO0X5b0mQ4eIHitXHXSFUyw"],
        apiKey: "AIzaSyDpMe_M0rCcJL67y_5LKK7cdYdOhC-Qzdo", // Optional for public requests
        maxVideos: 50, // Defaults to 50
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto Mono"],
      },
    },

    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
  ],
};
