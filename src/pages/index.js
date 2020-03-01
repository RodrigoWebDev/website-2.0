import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Gallery from "../components/Gallery"
import DataJson from "../data/data.json"
import "../assets/css/custom.css"
import $ from "jquery"
import favicon from "../assets/images/website-icon.png"
import Skills from "../components/Skills"

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
          {/* ============================ About ============================ */}
          <section id="one">
            <header className="major">
              <h2>Sobre mim...</h2>
            </header>
            <p>{MetaData.About}</p>

            <div className="skills">
              <h2>Skills</h2>
              <Skills skills={Data.Skills} />
            </div>
          </section>

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

          {/* ============================ Contact ============================ */}
          <section id="three">
            <h2>Entre em contato</h2>
            <p>
              Quer bater um papo, falar de negócios, ou se interessou pelos meus
              serviços? Então segue abaixo os meios para me contatar :)
            </p>
            <div>
              <ul className="actions">
                <li>
                  <a
                    className="button icon fa-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=5511961198782"
                  >
                    What's app
                  </a>
                </li>
                <li>
                  <a
                    className="button icon fa-envelope-o"
                    href="mailto:rodrigo.queiroz.chagas@gmail.com"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    className="button icon fa-linkedin-square"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
