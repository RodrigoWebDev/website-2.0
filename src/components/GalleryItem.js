import React from "react"
import Swal from "sweetalert2"

function modalAlert(img, title, download) {
  return () => {
    Swal.fire({
      imageUrl: `${require("../assets/images/portfolio/" + img)}`,
      title: title,
      confirmButtonText: `<a href='${download}'>Download</a>`,
    })
  }
}

export default ({ obj }) => {
  const { Name, Url, Download } = obj
  const checkTarget = obj.Url === undefined ? "" : "_blank"
  const checkHref = obj.Url === undefined ? "javascript:void(0)" : obj.Url
  const openModal = modalAlert(obj.Thumb, obj.Name, obj.Download)
  const checkClick =
    obj.Url === "javascript:void(0)" || obj.Url === undefined ? openModal : null
  const projectUrl = `${require("../assets/images/portfolio/" + obj.Thumb)}`

  return (
    <div>
      <a
        target={checkTarget}
        rel="noopener noreferrer"
        className="portfolio-link-img"
        href={checkHref}
        onClick={checkClick}
      >
        <img src={projectUrl} alt={obj.Name} />
      </a>

      <h3>{Name}</h3>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-link"
          href={Url}
        >
          {Url}
        </a>
      </p>
      {Download !== undefined && (
        <p>
          <button target="_blank" className="button" onClick={openModal}>
            Download
          </button>
        </p>
      )}
    </div>
  )
}
