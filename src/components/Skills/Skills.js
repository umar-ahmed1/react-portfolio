import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills" id="skills">
        <h2 className="skills-header">Skills</h2>
        <div className="skills-body">
            <div className="skills-subsection">
                <div>Front-End</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React</div>
            </div>
            <div className="skills-subsection">
                <div>Back-End</div>
                <div>Java</div>
                <div>Python</div>
            </div>
            <div className="skills-subsection">Other</div> 
        </div>
        
    </section>
    

  )
}
