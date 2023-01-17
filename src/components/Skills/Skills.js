import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills" id="skills">
        <h2 className="skills-header">Skills</h2>
        <div className="skills-body">
          <div className="skills-item">
            <img className="skills-item-img" src="./images/html.svg"></img>
            <div>HTML</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src="./images/css.svg"></img>
            <div>CSS</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src="./images/javascript.svg"></img>
            <div>JavaScript</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src="./images/react.svg"></img>
            <div>React</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src="./images/java.svg"></img>
            <div>Java</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src="./images/python.svg"></img>
            <div>Python</div>
          </div>
        </div>
        
    </section>
    

  )
}
