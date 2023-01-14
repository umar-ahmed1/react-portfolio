import React from 'react'
import './Projects.css'
import Project from './Project' 


const projectsData = [
  {
    title:"React Quiz App",
    description:"my first project it is a quiz app in react",
    language:"React",
    link:"www.google.com",
    github:"https://github.com/umar-ahmed1/react-quiz-app",
    img:'./images/react-quiz-app.png'
  },
  {
    title:"React Portfolio Website",
    description:"I used React to make a website where i put all my stuff on it blablablab",
    language:"React",
    link:"www.google.com",
    github:"https://github.com/umar-ahmed1/react-portfolio",
    img:'https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?resize=738%2C320&ssl=1',
  },
  {
    title:"Python Snake Game",
    description:"my first project",
    language:"Python",
    link:"www.google.com",
    github:"www.github.com",
    img:'https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?resize=738%2C320&ssl=1',
  },
  {
    title:"Python Machine Learning",
    description:"my first project",
    language:"Python",
    link:"www.google.com",
    github:"www.github.com",
    img:'https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?resize=738%2C320&ssl=1',
  },

]


export default function Projects() {
  return (
    <section className="projects">
        <div className="projects-wrapper">
          <h2 className="projects-header">Projects</h2>
          <div className="projects-languages">
            <button>All</button>
            <button>React</button>
            <button>Python</button>
          </div>
          <div className="projects-grid">
            {projectsData.map( (item,index) => (
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
