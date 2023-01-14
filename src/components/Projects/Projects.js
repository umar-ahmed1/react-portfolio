import React from 'react'
import './Projects.css'
import Project from './Project' 


const projectsData = [
  {
    title:"Project 1",
    description:"my first project",
    language:"React",
    link:"www.google.com",
    github:"www.github.com",
  },
  {
    title:"Project 2",
    description:"my first project",
    language:"React",
    link:"www.google.com",
    github:"www.github.com",
  },
  {
    title:"Project 3",
    description:"my first project",
    language:"Python",
    link:"www.google.com",
    github:"www.github.com",
  },
  {
    title:"Project 4",
    description:"my first project",
    language:"Python",
    link:"www.google.com",
    github:"www.github.com",
  }

]


export default function Projects() {
  return (
    <section className="projects">
        <div className="projects-wrapper">
          <div className="projects-grid">
            {projectsData.map( (item,index) => (
              <Project
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
