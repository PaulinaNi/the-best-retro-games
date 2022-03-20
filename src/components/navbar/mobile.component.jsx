import { useState } from "react"

import NavBarLinks from "./navBarLinks.component"
import { CgClose, CgMenu } from "react-icons/cg"
import { IconContext } from "react-icons";


export default function Mobile() {
 const [isMenuOpen, setIsMenuOpen] = useState(false)

 function chandleClick() {
  setIsMenuOpen(!isMenuOpen)
 }

 const openMenu =
  <IconContext.Provider value={{ color: "var(--color-main)", size: "2.5rem" }}>
   <div className="menuIcons">
    <CgMenu onClick={chandleClick} />
   </div>
  </IconContext.Provider>

 const closeMenu =
  <IconContext.Provider value={{ color: "var(--color-main)", size: "2.5rem" }}>
   <div className="menuIcons">
    <CgClose onClick={chandleClick} />
   </div>
  </IconContext.Provider>

 function handleClickForLink(){
  setIsMenuOpen(false)
 }
 return (
  <section className="mobileNavBar">
   {isMenuOpen ? closeMenu : openMenu}
   {isMenuOpen && <NavBarLinks onClick={handleClickForLink}/>}
  </section>
 )
}