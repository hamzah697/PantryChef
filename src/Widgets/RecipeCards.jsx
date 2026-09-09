import React from 'react'
import {RecipeDetails} from '../Services/RecipeApi'

const RecipeCards = ({heading,explain,vision,id}) => {

  return (
    <div>
       
         
          <article className="recipe-card">
            <div className="recipe-card-image">
           <img src={vision} alt="recipe" />
            </div>

            <div className="recipe-card-content">
              <p className="recipe-card-match">
                4 ingredients matched
              </p>

              <h3 className="recipe-card-title">
                {heading}
              </h3>

              <p className="recipe-card-description">
                {explain}
              </p>

              <button className="recipe-card-button" onClick={async () => {
              const Results = await RecipeDetails(id);
              window.open(Results.sourceUrl, "_blank")
              Results.location= Results.sourceUrl;
              }}>
                View Recipe
              </button>
            </div>
          </article>

        
    </div>
  )
}

export default RecipeCards
