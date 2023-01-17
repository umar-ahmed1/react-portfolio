import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills" id="skills">
        <h2 className="skills-header">Skills</h2>
        <div className="skills-body">
          <div className="skills-item">
            <img className="skills-item-img" src={require("./images/html.svg").default}></img>
            <div>HTML</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src={require("./images/css.svg").default}></img>
            <div>CSS</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src={require("./images/javascript.svg").default}></img>
            <div>JavaScript</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src={require("./images/react.svg").default}></img>
            <div>React</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src={require("./images/java.svg").default}></img>
            <div>Java</div>
          </div>
          <div className="skills-item">
            <img className="skills-item-img" src={require("./images/python.svg").default}></img>
            <div>Python</div>
          </div>
        </div>
        
    </section>
    

  )
}
