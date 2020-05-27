module.exports = {
  siteMetadata: {
    title: "Rodrigo Queiroz | Front End Developer",
    author: "Rodrigo Queiroz",
    description: "Meu website e portfolio",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rodrigo Queiroz | Front End Developer",
        short_name: "RQueiroz",
        start_url: "/",
        background_color: "#383838",
        theme_color: "#383838",
        display: "minimal-ui",
        icon: "src/assets/images/website-icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        disable: !process.env.SENTRY_DSN,
        src: "https://browser.sentry-cdn.com/5.15.4/bundle.min.js",
        integrity:
          "sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB",
        crossorigin: "anonymous",
        onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
      },
    },
    "gatsby-plugin-sass",
  ],
}
