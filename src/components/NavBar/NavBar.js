import React from 'react'
import './NavBar.css'
import { Link} from 'react-scroll'

export default function NavBar() {
  const [navShow,setNavShow] = React.useState(true)
  let prevScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (prevScrollY < window.scrollY){
      setNavShow(false)
    } else if (prevScrollY > window.scrollY) {
      setNavShow(true)
      
    } 
    prevScrollY = window.scrollY;
  })


  return (
    <nav className={navShow ? "navbar" : "navbar inactive"}>
      <Link className="nav-link" to="home" offset={-190} spy={true} smooth={true} duration={500}>HOME</Link>
      <Link className="nav-link" to="skills" offset={-100} spy={true} smooth={true} duration={500}>SKILLS</Link>
      <Link className="nav-link" to="projects" offset={-100} spy={true} smooth={true} duration={500}>PORTFOLIO</Link>
      <Link className="nav-link" to="connect" offset={-50} spy={true} smooth={true} duration={500}>CONNECT</Link>

    </nav>
  )
}
