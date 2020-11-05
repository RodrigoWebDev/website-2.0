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
  const [noFilterPortfolio, setNoFilterPortfolio] = useState([])
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

  const getPortfolio = () => {
    var tempFilters = []
    var url1 = "https://api.github.com/users/RodrigoWebDev/repos?per_page=100&sort=created"
    //var url1 = "https://api.github.com/repos/RodrigoWebDev/my-website"
    var datum = fetch(url1)
      .then((response) => response.json())
      .then((data) => {
          return Promise.all(data.map(item => {
            //item.full_name returns the repositorie name
            return fetch(`https://raw.githubusercontent.com/${item.full_name}/master/built-with.json`)
              .then(data => data.text())
              .then(data => {
                if(data !== "404: Not Found"){
                  item["filters"] = JSON.parse(data)
                  tempFilters.push(...JSON.parse(data))
                }else{
                  item["filters"] = ""
                }

                return item
              })
          }));
        })
        //.then(data => {
          //setPortfolio(data)
        //})

        datum.then(data => {
          setPortfolio(data)
          setNoFilterPortfolio(data)
          setFilters(removeDuplicates(tempFilters))
        })
  }

  const clickFilters = filter => {
    setPortfolio(noFilterPortfolio)
    let filteredPortfolio = noFilterPortfolio.filter(item => item.filters.includes(filter))
    setPortfolio(filteredPortfolio)
  }

  useEffect(() => {
    getPortfolio()
  }, [])

  return(
    <Layout>
      <Head metaData={MetaData} />

      <div id="main">
        <Filters
          filters={filters}
          clickFilters={clickFilters}
        />

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
