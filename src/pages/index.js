import React from "react"
import $ from "jquery"
import axios from "axios"

//Styles
import "../assets/scss/main.scss"

//sections
import Layout from "../sections/layout"
import Head from "../sections/Head"
import Skills from "../sections/Skills"
import Contact from "../sections/Contact"
import Services from "../sections/Services.js"
import About from "../sections/About"

//Componets
import Gallery from "../components/Gallery"
import Load from "../components/Loader"

//data
import DataJson from "../data/data.json"
const Data = DataJson[0]
const MetaData = Data.MetaData[0]

export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullPortfolio: false,
      portfolio: [],
      isFetching: false,
    }
  }

  handleClick = e => {
    this.setState({
      fullPortfolio: !this.state.fullPortfolio,
    })
  }

  setLoader = e => {
    this.setState({
      isFetching: e,
    })
  }

  getPortfolio = async () => {
    this.setLoader(true)
    await axios
      .get(
        "https://api.github.com/users/RodrigoWebDev/repos?per_page=100&sort=created"
      )
      .then(response => {
        this.setState({
          portfolio: response.data,
        })
        this.setLoader(false)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  clickAccordion = () => {
    $(".accordion").click(function() {
      $(this).toggleClass("accordion--open")
      $(this)
        .next()
        .slideToggle()
    })
  }

  componentDidMount() {
    this.clickAccordion()
    this.getPortfolio()
  }

  render() {
    const { fullPortfolio, portfolio, isFetching } = this.state
    const { handleClick } = this
    const skills = Data.Skills
    return (
      <Layout>
        <Head metaData={MetaData} />

        <div id="main">
          <Gallery
            title="Portfolio"
            handleClick={handleClick}
            fullPortfolio={fullPortfolio}
            items={portfolio}
            isFetching={isFetching}
          />

          <Services />

          <Skills skills={skills} />

          <About metaData={MetaData} />

          <Contact />
        </div>
      </Layout>
    )
  }
}
