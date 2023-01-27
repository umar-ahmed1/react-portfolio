import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'

export default function About()  {
 return (
    <section className="home" id="home">
          <div className="profile-picture">
            <img className="profile-svg" src={require("./images/user.svg").default}></img>
          </div>
          <div className="profile-details">
            <div className="name">Hi, I'm Umar Ahmed</div>
            <div className="description">
            <Typewriter
              options={{
                strings: ['I am a Front-End Developer from Calgary, Alberta.',],
                autoStart: true,
                loop: true,
                delay:100,
              }}
            />
            </div>
            <a download target="_blank" href="https://docs.google.com/document/d/1pfW2VNFhOxRROkMrxz0rXqnq-KFKutze/edit?usp=sharing&ouid=117530086391634266355&rtpof=true&sd=true">
              <button className="button cv">VIEW RESUME</button>
            </a>
        </div>
    </section>
  )
}
