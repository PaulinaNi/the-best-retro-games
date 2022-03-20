import "./navBar.style.css"

import Desktop from "./desktop.component"
import Mobile from "./mobile.component"

export default function NavBar(){
 return(
  <nav className="navBar">
   <Desktop />
   <Mobile />
  </nav>
 )
}