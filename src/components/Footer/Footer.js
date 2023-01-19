import React from 'react'
import './Footer.css'
import { Link} from 'react-scroll'

export default function Footer() {
  return (
    <footer className="footer">
        <div>Created by Umar Ahmed</div>
        <Link  className="return-top" to="home" offset={-190} spy={true} smooth={true} duration={500}>
            <div>Back to Top</div>
            <img  src={require("./up_arrow.svg").default}></img>
        </Link>
            
    
    </footer>

  )
}
