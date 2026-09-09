import React from "react";
import RecipeCards from "../Widgets/RecipeCards";

const RecipeResults = ({recipes}) => {

             
      const recipeCards = recipes.map((recipe, index) => (
  <RecipeCards
    heading={recipe.title}
    explain={`Uses ${recipe.usedIngredientCount} of your ingredients, missing ${recipe.missedIngredientCount}`}
    vision={recipe.image}
    key={index}
    id={recipe.id}
  />))
        

  return (
    <section className="recipe-results">
      <div className="recipe-results-container">

        <div className="recipe-results-header">
          <p className="recipe-results-eyebrow">
            From your pantry
          </p>

          <h2 className="recipe-results-title">
            Recipes you can make
          </h2>

          <p className="recipe-results-description">
            Discover delicious recipes based on the ingredients you already have.
          </p>
        </div>
              <div className="recipe-grid">     
              {recipeCards}
           </div>

      </div>
    </section>
  );
};

export default RecipeResults;