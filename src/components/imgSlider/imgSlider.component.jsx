import "./imgSlider.style.css"
import { useState } from "react";

import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md"
import { IconContext } from "react-icons";

<IconContext.Provider value={{ color: "blue" }}>
 <div>
  <MdRadioButtonChecked />
 </div>
</IconContext.Provider>

export default function ImgSlider(props) {
 const { img } = props

 const [allSliders, setAllSliders] = useState([
  {
   id: 0,
   img: img[0],
   isCurrentImg: true,
  },
  {
   id: 1,
   img: img[1],
   isCurrentImg: false,
  },
  {
   id: 2,
   img: img[2],
   isCurrentImg: false,
  }
 ])
 
 function changeCurrentSlide(id) {
  setAllSliders(prevState => {
   const newState = prevState.map(slide => {
    return slide.id === id ?
     { ...slide, isCurrentImg: !slide.isCurrentImg } :
     { ...slide, isCurrentImg: false }
   })
   return newState
  })

 }


 return (
  <section className="imgSlider">

   {allSliders
    .filter(slide => slide.isCurrentImg === true)
    .map(currentImg => <img key={currentImg.id} src={currentImg.img} alt="game screenshoot" />)}

   <section className="imgSliderDots">
    {allSliders.map(slide => {
     return (
      <IconContext.Provider
       key={slide.id}
       value={{
        color: "var(--color-white)",
        size: "1.5rem"
       }
       }>
       <div>
        {slide.isCurrentImg ?
         <MdRadioButtonChecked /> :
         <MdRadioButtonUnchecked onClick={() => changeCurrentSlide(slide.id)} />
        }
       </div>
      </IconContext.Provider>
     )
    })}
   </section>

  </section>
 )
}