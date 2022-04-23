module.exports = {
  siteMetadata: {
    defaultTitle: "web2rise",
    defaultDescription:
      "WELCOME TO WEB2RISE Your Success Is Our Purpose Learn more contact us Quality Services Website Designing We endures our client demands at scale and offers high-quality customized business solutions. View More Digital Marketing We do Digital Marketing, SEO/SEM, database marketing, email, social media, and display advertising campaigns. View More App Development With our talented team ... Read more",
    siteUrl: `https://www.web2rise.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-json",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `services`,
        path: `${__dirname}/services`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `bakcgroundImage`,
        path: `${__dirname}/assets/bg`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
