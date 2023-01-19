import React from 'react'

export default function Project({title,description,link,github,img}) {
  return (
    <div className="project-card">
      <img className="project-img" src={img}></img>
      <div className="project-card-title">{title}</div>
      <div className="project-card-description">{description}</div>
      <div className="project-card-links">
          <a target="_blank" href={link}>
              <button className="project-card-view">View Project</button>  
          </a>
          <a className="project-card-github" target="_blank" href={github}>
          <img className="github-svg" src={require("./images/github.svg").default}></img>
          </a>     
      </div>
    </div>
  )
}
