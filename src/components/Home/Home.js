import React from 'react'
import './Home.css'

export default function About()  {
 return (
    <section className="home">
        <div className="home-wrapper">
          <div className="profile-picture"></div>
          <div className="profile-details">
            <div className="name">Hi, I'm Umar Ahmed</div>
            <div className="description">I am a Front-End Developer from Calgary, Alberta </div>
            <button className="button cv">Download CV</button>
          </div>
          
        </div>
    </section>
  )
}
