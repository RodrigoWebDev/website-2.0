import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import DataJson from '../data/data.json'
import customCSS from '../assets/css/custom.css'
import $ from "jquery"

const Data = DataJson[0];
const MetaData = Data.MetaData[0];
const Skills = Data.Skills;

class HomeIndex extends React.Component {
  componentDidMount() {
    $(".accordion").click(function(){
      $(this).toggleClass("accordion--open");
      $(this).next().slideToggle();
    })
  }

  render() {
    const siteDescription = "Site destinado a mostrar meus trabalhos e habilidades"

    return (
      <Layout>
        <Helmet>
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
              <div>
                {Skills.map((item, index) => {
                  return (
                    <div>
                      <h3 className="accordion">{item.Name}</h3>
                      <ul className="panel">
                        {
                          item.Libs.map((e) => {
                            return(
                              <li><img width="20" src={`${require('../assets/images/skills/' + e.Icon)}`} alt={e.Name} />{e.Name}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ============================ Portfolio ============================ */}
          <section id="two" className="portfolio-home">
            <h2>Trabalhos Recentes</h2>

            <Gallery images={Data.Projects.map(({ id, Url, Thumb, Name, Description }) => ({
              Url,
              Thumb,
              Name,
              Description
            }))} />
          </section>

          {/* ============================ Contact ============================ */}
          <section id="three">
            <h2>Entre em contato</h2>
            <p>Quer bater um papo, falar de negócios, ou se interessou pelos meus serviços? Então segue abaixo os meios para me contatar :)</p>
            <div>
              <ul className="actions">
                <li><a className="button icon fa-whatsapp" target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=556192191727">What's app</a></li>
                <li><a className="button icon fa-envelope-o" href="mailto:rodrigo.queiroz.chagas@gmail.com">Email</a></li>
                <li><a className="button icon fa-linkedin-square" target="_blank" href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/">Linkedin</a></li>
              </ul>
            </div>
          </section>

        </div>

      </Layout>
    )
  }
}

export default HomeIndex