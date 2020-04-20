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
import Portfolio from "../sections/Portfolio"
import About from "../sections/About"

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
    }
  }

  handleClick = e => {
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
      .get(
        "https://api.github.com/users/RodrigoWebDev/repos?per_page=100&sort=created",
        {
          headers: {
            Authorization: "token ae96317fc1e92e710f3b53270e16b97316b4a44a",
          },
        }
      )
      .then(response => {
        this.setState({
          portfolio: response.data,
        })
      })
      .catch(function(error) {
        console.log(error)
      })
      .then(function() {})
  }

  render() {
    return (
      <Layout>
        <Head metaData={MetaData} />

        <div id="main">
          <Portfolio
            handleClick={this.handleClick}
            fullPortfolio={this.state.fullPortfolio}
            items={this.state.portfolio}
          />

          <Services />

          <Skills skills={Data.Skills} />

          <About metaData={MetaData} />

          <Contact />
        </div>
      </Layout>
    )
  }
}
