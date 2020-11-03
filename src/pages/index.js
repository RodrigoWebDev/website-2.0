import React, {useState, useEffect} from "react"
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
import Filters from "../components/Filters"

//data
import DataJson from "../data/data.json"

export default () => {
  const [fullPortfolio, setFullPortfolio] = useState(false)
  const [portfolio, setPortfolio] = useState([])
  const [filters, setFilters] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const Data = DataJson[0]
  const MetaData = Data.MetaData[0]
  const skills = Data.Skills
  const services = Data.services
  const handleClick = () => setFullPortfolio(!fullPortfolio)
  const setLoader = e => setIsFetching(e)
  const removeDuplicates = array => array.filter((a, b) => array.indexOf(a) === b);

  const getPortfolio = async () => {
    const url = "https://api.github.com/users/RodrigoWebDev/repos?per_page=100&sort=created"
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPortfolio(data)
        //console.log("getDataFilters() ==>", getDataFilters())

        /*function getDataFilters(){
          return data.map(item => {
            fetch(`https://raw.githubusercontent.com/${item.full_name}/master/built-with.json`)
              .then(data => {
                item["filters"] = data
                return item
              })
          })
        }

        data.forEach(item => {
          fetch(`https://raw.githubusercontent.com/${item.full_name}/master/built-with.json`)
            .then(data => data.json())
            .then(data => {
              console.log("data ==>", data)
              setFilters([...filters, ...data])

              return filters
            })
            .then(data => {
              setFilters(removeDuplicates())
            });
        });*/
      });
  };

  const clickFilters = filter => {
    //let portfolio = this.state.portfolio
    //portfolio.filter( item => item === )
  }

  useEffect(() => {
    getPortfolio()
  })

  return(
    <Layout>
      <Head metaData={MetaData} />
      <Filters
        filters={filters}
        clickFilters={clickFilters}
      />

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

/*export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullPortfolio: false,
      portfolio: [],
      filters: [],
      isFetching: false,
    };
  }

  handleClick = (e) => {
    this.setState({
      fullPortfolio: !this.state.fullPortfolio,
    });
  };

  setLoader = (e) => {
    this.setState({
      isFetching: e,
    });
  };

  removeDuplicates = (array) => array.filter((a, b) => array.indexOf(a) === b);

  render() {

    );
  }
}*/
