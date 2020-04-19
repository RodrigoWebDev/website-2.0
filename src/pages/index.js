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
import axios from "axios"

const Data = DataJson[0]
const MetaData = Data.MetaData[0]

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullPortfolio: false,
      portfolio: [],
    }
  }

  handleClick = e => {
    console.log("click")
    this.setState({
      fullPortfolio: !this.state.fullPortfolio,
    })
  }

  async componentDidMount() {
    $(".accordion").click(function() {
      $(this).toggleClass("accordion--open")
      $(this)
        .next()
        .slideToggle()
    })

    await axios
      .get("https://api.github.com/users/RodrigoWebDev/repos")
      .then(response => {
        // handle success
        this.setState({
          portfolio: response.data,
        })
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
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
            <h2>Github</h2>

            <Gallery
              handleClick={this.handleClick}
              fullPortfolio={this.state.fullPortfolio}
              items={this.state.portfolio}
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
