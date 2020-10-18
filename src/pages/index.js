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

  /*getLinkedinData = async () => {
    const linkedin = {
      clientId: "78ntlwm1xs1qt3",
      clientSecret: "5DkivD1mHfDxBm1R&",
      redirectUri: "https%3A%2F%2Frqueiroz.netlify.app%2F",
      state: "7a0a68743abfbe11629a976f1f4abaea", //https://md5decrypt.net/en/
      scope: "r_liteprofile%20r_emailaddress%20w_member_social",
      code:
        "AQRx2rGh8i7ZKJA5HdXIaIwtu2_w4Zq5Ar6phrG1FtswYPN2znantkSki-YXIXmOC46Aly8gq6Ix1AUItLHPI8CzBWlkhHxBsN1yYWthc6OaJk-x9ILJzBbYAzhsKKLbPnHnfCVria9jQkpSSrAoE_mAXXEZZoWWEEckz4scrX-wP0wl6OQMcyLraGFIbA&",
    }

    const { clientId, clientSecret, redirectUri, state, scope, code } = linkedin

    axios({
      method: "POST",
      url: `https://www.linkedin.com/oauth/v2/acessToken`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}`,
    })
      .then(function(response) {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })

    //grant_type=authorization_code&code={authorization_code_from_step2_response}&redirect_uri=hhttps%3A%2F%2Fdev.example.com%2Fauth%2Flinkedin%2Fcallback&client_id={your_client_id}&client_secret={your_client_secret}
  }*/

  //https://rqueiroz.netlify.app/?code=AQRx2rGh8i7ZKJA5HdXIaIwtu2_w4Zq5Ar6phrG1FtswYPN2znantkSki-YXIXmOC46Aly8gq6Ix1AUItLHPI8CzBWlkhHxBsN1yYWthc6OaJk-x9ILJzBbYAzhsKKLbPnHnfCVria9jQkpSSrAoE_mAXXEZZoWWEEckz4scrX-wP0wl6OQMcyLraGFIbA&state=7a0a68743abfbe11629a976f1f4abaea

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
    //this.getLinkedinData()
  }

  render() {
    const { fullPortfolio, portfolio, isFetching } = this.state
    const { handleClick } = this
    const skills = Data.Skills
    const services = Data.services
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

          <Services serv={services} />

          <Skills skills={skills} />

          <About metaData={MetaData} />

          <Contact />
        </div>
      </Layout>
    )
  }
}
