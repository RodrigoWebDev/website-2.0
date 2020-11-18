import React, { useState, useEffect, useRef } from "react";

//Styles
import "../assets/scss/main.scss";

//sections
import Layout from "../sections/layout";
import Head from "../sections/Head";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Services from "../sections/Services.js";
import About from "../sections/About";

//Componets
import Gallery from "../components/Gallery";

//data
import DataJson from "../data/data.json";

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
  const galleryRef = useRef(null)

  const setLoader = (e) => setIsFetching(e)
  const removeDuplicates = (array) => array.filter((a, b) => array.indexOf(a) === b)

  const handleClick = () => {
    setFullPortfolio(!fullPortfolio)
    //window.scrollTo(0,0)
    galleryRef.current.scrollIntoView({
      behavior: "smooth",
    });
    console.log(galleryRef)
  }

  const getPortfolio = () => {
    setIsFetching(true);
    let projects;
    let filters = [];
    fetch(
      "https://api.github.com/users/RodrigoWebDev/repos?per_page=100&sort=created"
    )
      .then((data) => data.json())
      .then((data) => {
        projects = data;
        let urls = data.map(
          (item) =>
            `https://raw.githubusercontent.com/${item.full_name}/master/built-with.json`
        );
        let tempFilters = urls.map((item) =>
          fetch(item)
            .then((data) => data.json())
            .catch((err) => "")
        );

        Promise.all(tempFilters).then((data) => {
          let newFilters = []
          let filtersObjects = []
          projects.map((item, i) => (item["filters"] = data[i]))
          filters = data.filter((item) => item !== "")
          filters.forEach((item) => {
            //debugger
            newFilters = newFilters.concat(item)
          })

          filtersObjects = removeDuplicates(newFilters).map(item => {
            return {
              filter: item,
              active: false
            }
          })

          console.log(filtersObjects)

          setPortfolio(projects)
          setNoFilterPortfolio(projects)
          setFilters(filtersObjects)
          setIsFetching(false);
        });
      });
  };

  const clickFilters = (filter) => {
    let tratedFilters = filters
    let filteredPortfolio = noFilterPortfolio.filter((item) =>
      item.filters.includes(filter)
    );

    setPortfolio(noFilterPortfolio);

    tratedFilters.forEach(item => {
      if(item.filter === filter && item.active === false){
        item.active = true
      }else{
        item.active = false
      }
    })

    if(hasFilterActive()){
      setPortfolio(filteredPortfolio);
    }else{
      setPortfolio(noFilterPortfolio);
    }

    setFilters(tratedFilters)

    function hasFilterActive(){
      return tratedFilters.some(item => {
        return item.active === true
      })
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <Layout>
      <Head metaData={MetaData} />
      <div id="main">
        <Gallery
          galleryRef={galleryRef}
          filters={filters}
          clickFilters={clickFilters}
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
      </div>{" "}
    </Layout>
  );
};
