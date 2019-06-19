module.exports = {
  siteMetadata: {
    title: "Rodrigo Queiroz | Front End Developer",
    author: "Rodrigo Queiroz",
    description: "Meu website e portfolio"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rodrigo Queiroz | Front End Developer',
        short_name: 'RQueiroz',
        start_url: '/',
        background_color: '#383838',
        theme_color: '#383838',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass'
  ],
}
