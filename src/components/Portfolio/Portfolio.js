import React from 'react'
import './Portfolio.css'
import Project from './Project' 
import projectsData from './ProjectsData'




export default function Portfolio() {
  const [data,setData] = React.useState(projectsData)
  const [filteredData,setFilteredData] = React.useState(data)
  

  function filterProjects(id){
    if (id === 'All'){
      setFilteredData(data)
    }
    else{
      const filteredPlaces = data.filter((item) => item.language == id)
      setFilteredData(filteredPlaces)
    }
  }

  return (
    <section className="projects">
        <div className="projects-wrapper">
          <h2 className="projects-header">Portfolio</h2>
          <div className="projects-languages">
            <button id={'All'} onClick= {(e) => filterProjects(e.target.id)}>All</button>
            <button id={'React'} onClick= {(e) => filterProjects(e.target.id)}>React</button>
            <button id={'Python'} onClick= {(e) => filterProjects(e.target.id)}>Python</button>
          </div>
          <div className="projects-grid">
            {filteredData.map( (item,index) => (
              <Project
                key = {index}
                img={item.img}
                title={item.title}
                description={item.description}
                language={item.language}
                link={item.link}
                github={item.github}
                />
              ))}
          </div>
        
        </div>
    </section>
  )
}
