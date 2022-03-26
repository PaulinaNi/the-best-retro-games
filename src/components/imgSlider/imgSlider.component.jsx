import "./imgSlider.style.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'



export default function ImgSlider(props) {
  const { img } = props

  return (
    <section className="imgSlider">
      <Carousel
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={img[0]} alt="gameplay screenshoot"/>
        </div>
        <div>
          <img src={img[1]} alt="gameplay screenshoot"/>
        </div>
        <div>
          <img src={img[2]} alt="gameplay screenshoot"/>
        </div>
      </Carousel>
    </section>
  )
}