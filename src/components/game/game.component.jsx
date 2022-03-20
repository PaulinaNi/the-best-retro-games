import "./game.style.css"

import ImgSlider from "../imgSlider/imgSlider.component"
import { Link } from "react-router-dom"

export default function Game(props) {
 const { game, isLinkNeeded } = props

 let consolLabel = game.platform
 let consolLink = "/"
 if (game.platform === "Commodore 64") {
  consolLink = "platform/commodore"
  consolLabel = <img className="platformImg" src="https://db3pap005files.storage.live.com/y4mxWRO33MSPY9NIJSFbScBMqFfhXOqJQD2TxXLz6Hm1sYF_lMe3VVb4XuV95uV45Gsytzg8Ua5jwFQ4Du8qRl9KPuYtEmt6gNz2v-o2wzvTfa7U-3MPAoyVDBFDAwYZ48l-CNwd9U-5ZKy7C_VjOqqKE1eA6GRg51U51211i4BkrI79vgSa7J8P0-SC1Ux2Om4?width=972&height=185&cropmode=none" alt="Comodore 64 logo" />
 } else if (game.platform === "ColecoVision") {
  consolLink = "platform/colecovision"
  consolLabel = <img className="platformImg" src="https://db3pap005files.storage.live.com/y4mxYnussZADi9RGfL7vEolnew-UX1iGqNkzh4Zqj29VRoTQWf78Kx2_EIhwaiSpHs7y4SHOiODQGUYGofHUERopVTzVgLkK018rWbeqfyfKAjMVK15VvrfkELgK67zPiqVjGDgIgMLq8CQjxjal5nPg4ZZm8wSUQuI76-UQ6lLlHLVID1lQ0s35tdr1hq7JIie?width=972&height=185&cropmode=none" alt="ColecoVision logo" />
 } else if (game.platform === "Atari XE/XL") {
  consolLink = "/platform/atariXEXL"
  consolLabel = <img className="platformImg" src="https://db3pap005files.storage.live.com/y4m5ut4dq_EshCbMSulmBtAaws5MNPCRG_iZU8VaJ39NZg4kEQopKcL6xy6b3r5oOvqQRZzgLr0sL0OtZbVx9AcNYs2JaXQzWci8HyQS9km_mFK5JOlgZXSzuAC74QAX9JA_dCrSWhfNiISSCYUJT_c5akHYK-um5h9-Tw18gi_z_xOWeZT1iRjTCh12w-I2Pqt?width=972&height=185&cropmode=none" alt="Atari XE/XL logo" />
 }



 return (
  <section className="gameContainer">

   <div className="gameSpecification">
    <div className="gameName">
     <h2>{game.name}</h2>
     {game.multi && <button className="co-opButton">CO-OP</button>}
    </div>
    <p>Platform:
     {isLinkNeeded ? 
     <Link className="consolLinks" to={consolLink}>{consolLabel}</Link>:
     <span>{consolLabel}</span>
     }
     
    </p>
    <p>Category: <span> | {game.category.map(category => `${category} | `)}</span></p>
    <p>Year: <span>{game.year}</span></p>
    {game.publisher && <p>Publisher: <span>{game.publisher}</span></p>}
    {game.developer && <p>Developer: <span>{game.developer}</span></p>}
   </div>
   <ImgSlider img={game.img} />

  </section>
 )
}