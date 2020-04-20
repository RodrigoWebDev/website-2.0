import React from "react"
import DataJson from "../data/data.json"

const SocialMedias = DataJson[0].MetaData[0].SocialMedias

class Footer extends React.Component {
  renderSocialMedias(socialMedias) {
    return (
      <>
        {socialMedias.map(item => {
          return (
            <li className="hvr-float" key={item.Name}>
              <a
                href={item.Link}
                target="_blank"
                rel="noopener noreferrer"
                className={"icon " + item.Class}
              >
                <span className="label">{item.Name}</span>
              </a>
            </li>
          )
        })}
      </>
    )
  }

  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">{this.renderSocialMedias(SocialMedias)}</ul>
          <ul className="copyright">
            <li>Developed with React and Gatsby</li>
            <li>
              Design:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://html5up.net"
              >
                HTML5 UP
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
