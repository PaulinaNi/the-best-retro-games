//all styles in searchPage

export default function filterInputRadio(props) {
  const { description, options, searchControl, handleSearchInputs, name } = props

  let checkboxControl 
  if(name === "platform"){
    checkboxControl = searchControl.platform
  }
  if(name === "category"){
    checkboxControl = searchControl.category
  }

  return (
    <section className="inputSection">
      <p>{description}</p>
      <div>
        {options.map(option =>
          <section key={option}>
            <input
              className="radioButton"
              type= "radio"
              name={name}
              id={option}
              value={option}
              checked={checkboxControl === option}
              onChange={handleSearchInputs}
            />
            <label htmlFor={option}>{option}</label>
          </section>)}
      </div>
    </section>
  )
}
