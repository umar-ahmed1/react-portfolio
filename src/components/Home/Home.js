import React from 'react'
import './Home.css'

export default function About()  {
 return (
    <section className="home">
        <div className="home-wrapper">
          <div className="profile-picture"></div>
          <div className="profile-details">
            <div className="name">Hi, I'm Umar Ahmed</div>
            <div className="description">I am a Web Developer with a background in React.js and Python, currently looking for 2023 Internships. </div>
            <button className="button cv">Download CV</button>
          </div>
          
        </div>
    </section>
  )
}
