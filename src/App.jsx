import React from 'react'
import Navbar from './Layout/Navbar'
import Hero from './Shared/Hero'
import RecipeResult from './Shared/RecipeResult'
import {getRecipes} from './Services/RecipeApi'
import { useState } from 'react'
import Footer from './Layout/Footer'
const App = () => {
   const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredients) => {
    const data = await getRecipes(ingredients);
    setRecipes(data);
  };
  return (
    <div>
      <Navbar/>
      <Hero onSearch={handleSearch}/>
      <RecipeResult recipes={recipes}/>
     <Footer/>
    </div>
  )
}

export default App
