import React from 'react'
import stuff from '../assets/stuff.png'
import { useState } from 'react'




const Hero = ({onSearch}) => {
  const [currentingredient,Setcurrentingredient]= useState("")

  const [ingredients,Setingredients]= useState([""])
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-text">
          <p className="hero-eyebrow">YOUR PANTRY, YOUR RECIPES</p>

          <h1>
            Turn what you have
            <span> into something delicious.</span>
          </h1>

          <p className="hero-description">
            Tell us what's in your pantry and discover recipes
            you can make right now.
          </p>

          
           <div className="ingredient-section">

  <div className="ingredient-box">

    <div className="ingredient-list">
      {ingredients.map((ingredient, index) => {
        
        return (
          <span className="ingredient-chip" key={index}

          >
            {ingredient}
            <button className='ingredient-chips-button'
              onClick={(fourth)=>{
               Setingredients(
                ingredients.filter((ingredient,filterindex)=>{ 
                 return filterindex!==index
                })
                
               )
          }}
            >x</button>
          </span>
        )
      })}
    </div>

    <input
      className="ingredient-input"
      placeholder="Add an ingredient..."
      value={currentingredient}
      onChange={(second) => {
        Setcurrentingredient(second.target.value)
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          if(currentingredient.trim().length>0){
           
             Setingredients([...ingredients,currentingredient.trim()])
             Setcurrentingredient("")
          }
         
        }
      }}
    />

  </div>

  <button className="find-recipes-button" onClick={()=>{
    onSearch(ingredients.join(","))
  }}>
    Find Recipes
  </button>

</div>
        </div>


        <div className="hero-image">
          <img
            src={stuff}
            alt="ingredients.alt"
          />
        </div>

      </div>

    </section>
  )
}

export default Hero