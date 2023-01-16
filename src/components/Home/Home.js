import React from 'react'
import './Home.css'
import Typical from 'react-typical'
import Typewriter from 'typewriter-effect'

export default function About()  {
 return (
    <section className="home">
        <div className="home-wrapper">
          <div className="profile-picture"></div>
          <div className="profile-details">
            <div className="name">Hi, I'm Umar Ahmed</div>
            <div className="description">
            <Typewriter
              options={{
                strings: ['I am a Front-End Developer from Calgary, Alberta.', 'I like to make web applications.','Welcome to my portfolio!'],
                autoStart: true,
                loop: true,
                delay:100,
              }}
            />
              
            </div>
            <button className="button cv">Download CV</button>
          </div>
          
        </div>
    </section>
  )
}
