import React from "react"
import Helmet from "react-helmet"
import favicon from "../assets/images/website-icon.png"

export default props => (
  <Helmet
    link={[
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${favicon}`,
      },
    ]}
  >
    <title>{props.metaData.SiteName}</title>
    <meta name="description" content={props.metaData.Description} />
  </Helmet>
)
