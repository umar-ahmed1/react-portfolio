import React from 'react'
import './NavBar.css'
import { Link} from 'react-scroll'

export default function NavBar() {
  const [navShow,setNavShow] = React.useState(true)


  return (
    <nav className={navShow ? "navbar" : "navbar inactive"}>
      <Link className="nav-link" to="home" offset={-190} spy={true} smooth={true} duration={500}>HOME</Link>
      <Link className="nav-link" to="skills" spy={true} smooth={true} duration={500}>SKILLS</Link>
      <Link className="nav-link" to="projects" offset={-50} spy={true} smooth={true} duration={500}>PORTFOLIO</Link>
      <Link className="nav-link" to="connect" spy={true} smooth={true} duration={500}>CONNECT</Link>

    </nav>
  )
}
