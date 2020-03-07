import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Gallery from "../components/Gallery"
import DataJson from "../data/data.json"
import "../assets/css/custom.css"
import $ from "jquery"
import favicon from "../assets/images/website-icon.png"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Services from "../components/Services"

const Data = DataJson[0]
const MetaData = Data.MetaData[0]

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullPortfolio: false,
    }
  }

  handleClick = e => {
    console.log("click")
    this.setState({
      fullPortfolio: !this.state.fullPortfolio,
    })
  }

  componentDidMount() {
    $(".accordion").click(function() {
      $(this).toggleClass("accordion--open")
      $(this)
        .next()
        .slideToggle()
    })
  }

  render() {
    return (
      <Layout>
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
          <title>{MetaData.SiteName}</title>
          <meta name="description" content={MetaData.Description} />
        </Helmet>

        <div id="main">
          {/* ============================ Portfolio ============================ */}
          <section id="two" className="portfolio-home">
            <h2>Top Works</h2>

            <Gallery
              handleClick={this.handleClick}
              fullPortfolio={this.state.fullPortfolio}
              images={Data.Projects.map(
                ({ Url, Thumb, Name, Description, Download }) => ({
                  Url,
                  Thumb,
                  Name,
                  Description,
                  Download,
                })
              )}
            />
          </section>

          <Services />

          {/* ============================ About ============================ */}
          <section id="one">
            <div className="skills">
              <h2>Skills</h2>
              <Skills skills={Data.Skills} />
            </div>
          </section>

          <section>
            <header className="two">
              <h2>About me</h2>
            </header>
            <p>{MetaData.About}</p>
          </section>

          <Contact />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
