import React from 'react'
import './Portfolio.css'
import Project from './Project' 
import projectsData from './ProjectsData'




export default function Portfolio() {
  const [data,setData] = React.useState(projectsData)
  const [filteredData,setFilteredData] = React.useState(data)

  const [clickedButton,setClickedButton] = React.useState('All')
  

  function filterProjects(e){
    setClickedButton(e.target.id)
    if (e.target.id === 'All'){
      setFilteredData(data)
    }
    else{
      const filteredData = data.filter((item) => item.language === e.target.id)
      setFilteredData(filteredData)
      console.log(e.target)
    }
  }

  return (
    <section className="projects" id="projects">
        <div className="projects-wrapper">
          <h2 className="projects-header">Portfolio</h2>
          <div className="projects-languages">
            <button id={'All'} onClick= {(e) => filterProjects(e)} 
              className={clickedButton === 'All' ? "projects-languages-button clicked" : "projects-languages-button"}
            >All</button>
            <button id={'React'} onClick= {(e) => filterProjects(e)}
              className={clickedButton === 'React' ? "projects-languages-button clicked" : "projects-languages-button"}
            >React</button>
            <button id={'Python'} onClick= {(e) => filterProjects(e)}
              className={clickedButton === 'Python' ? "projects-languages-button clicked" : "projects-languages-button"}
            >Python</button>
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
