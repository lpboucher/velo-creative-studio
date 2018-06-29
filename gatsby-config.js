module.exports = {
  siteMetadata: {
    title: 'Velo Creative Studio.',
    desc: 'Velo Creative Studio is a marketing agency based in Amsterdam.',
  },
  plugins: ['gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'sckvi4744x2d',
        accessToken: '330c9fd8319d502b461f2b6f6d22fce6f9b75dbbcaf35dce2a1eeda04ca58309',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Lato:300,400,700',
        ],
      },
    },
  ],
};
