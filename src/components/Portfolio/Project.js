import React from 'react'

export default function Project({title,description,link,github,img}) {  
  const [flipped,setFlipped] = React.useState(false);
  
  function handleClick(e){
    e.stopPropagation();
    setFlipped(!flipped);

  }


  return (
    <div className={!flipped ? "project-card" : "project-card flipped"} onClick={(e) => handleClick(e)}>
      <div className="project-card-front">
        <img className="project-img" src={img}></img>
        <div className="project-card-title">{title}</div>
      </div>
      <div className="project-card-back">
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

    </div>
  )
}
