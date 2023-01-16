import React from 'react'
import './NavBar.css'

export default function NavBar() {
  const [navShow,setNavShow] = React.useState(true)
  let prevScrollY = 0;

  React.useEffect(()=>{
    if (window.scrollY > 80){
      setNavShow(false)
    } else {
      setNavShow(true)
    }

    prevScrollY = window.scrollY
 
  },[navShow])

  return (
    <nav className={navShow ? "navbar" : "navbar inactive"}>
        <a href="#home">
          <div className="nav-home">HOME</div>
        </a>
        <a href="#skills">
          <div className="nav-about">SKILLS</div>
        </a>
        <a href="#projects">
          <div className="nav-projects">PORTFOLIO</div>
        </a>
        <a href="#connect">
          <div className="nav-connect">CONNECT</div>
        </a>     
    </nav>
  )
}
