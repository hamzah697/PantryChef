const getRecipes = async (ingredients) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&ranking=1&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
    );
    console.log("status:", response.status);

    const data = await response.json();
    console.log("data:", data);

    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}


const RecipeDetails = async (id) =>{
  try{
    const check = await fetch (
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
    )
    const log = await check.json()
    console.log("Recipe details:", log);
    return log;
  } catch (error){
    console.error("Fetch failed:", error);
  }
}

export { getRecipes, RecipeDetails };