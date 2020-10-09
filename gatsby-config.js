
const dotenv = require("dotenv");


dotenv.config();


module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
         
          accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        },
      },
    ],
  }