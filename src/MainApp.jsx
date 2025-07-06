import "./MainApp.css"
import { useState } from "react"
import Recipe from './Recipe'
import IngredientsList from './IngredientsList'

export default function Body() {
  const [ingredients, setIngredients] = useState([
    "apple",
    "banana",
    "pear",
    "cheese",
  ])

  const [recipeShown, setRecipeShown] = useState(false)

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prev) => [...prev, newIngredient])
  }

  function getRecipe() {
    setRecipeShown((prev) => !prev)
  }

  return (
    <main>
      <form action={addIngredient}>
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <input type="submit" value="+ Add ingredient" />
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} recipe={getRecipe}/>
      )}
      {recipeShown && (
        <Recipe />
      )}
    </main>
  )
}
