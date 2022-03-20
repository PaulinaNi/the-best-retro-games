import FilterInputRadio from "../filterInputRadio/filterInputRadio.component"

//all styles in searchPage

export default function Search(props) {
     const { handleFormSubmition, searchControl, handleSearchInputs, reset } = props

     return (
          <section className="search">
               <form onSubmit={handleFormSubmition}>
                    <section className="filtersSection">
                         <div>
                              <label htmlFor="name"><p>Game:</p></label>
                              <input
                                   type="text"
                                   name="name"
                                   id="name"
                                   value={searchControl.name}
                                   onChange={(event) => handleSearchInputs(event)}
                              />
                         </div>
                         <div className="inputSection">
                              <p>CO - OP</p>
                              <div>
                                   <section>
                                        <input
                                             className="radioButton"
                                             type="radio"
                                             name="singleOrMulti"
                                             id="single"
                                             value="single"
                                             checked={searchControl.singleOrMulti === "single"}
                                             onChange={handleSearchInputs}
                                        />
                                        <label htmlFor="single">Single Player</label>
                                   </section>
                                   <section>
                                        <input
                                             className="radioButton"
                                             type="radio"
                                             name="singleOrMulti"
                                             id="multi"
                                             value="multi"
                                             checked={searchControl.singleOrMulti === "multi"}
                                             onChange={handleSearchInputs}
                                        />
                                        <label htmlFor="multi">CO - OP</label>
                                   </section>
                              </div>
                         </div>

                         <FilterInputRadio
                              description="Platform"
                              options={["Commodore 64", "ColecoVision", "Atari XE/XL"]}
                              searchControl={searchControl}
                              handleSearchInputs={handleSearchInputs}
                              name="platform"
                         />
                         <FilterInputRadio
                              description="Game Category"
                              options={["2D-Maze", "Puzzle Elements", "Platformer", "Sport", "Beat'Em Up", "Action","Shoot'Em Up", "Arcade", "Logical", "Racing"]}
                              searchControl={searchControl}
                              handleSearchInputs={handleSearchInputs}
                              name="category"
                         />
                    </section>
                    <button onClick={reset}>Reset</button>
               </form>
          </section>
     )
}