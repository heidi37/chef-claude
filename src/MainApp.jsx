import "./MainApp.css"
import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude } from "./api/ai"

export default function Body() {
  const [ingredients, setIngredients] = useState([])

  const [recipe, setRecipe] = useState([])

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prev) => [...prev, newIngredient])
  }

  function startOver() {
    setIngredients([])
    setRecipe([])
  }

  async function getRecipe() {
    try {
      const fetchedRecipe = await getRecipeFromChefClaude(ingredients)
      console.log(fetchedRecipe)
      setRecipe(fetchedRecipe)
    } catch {
      console.error("Error fetching recipe:", error)
    }
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
        <IngredientsList ingredients={ingredients} recipe={getRecipe} />
      )}
      {<ClaudeRecipe recipe={recipe} />}
      {ingredients.length > 0 && (
        <button onClick={startOver} class="start-over">
          Start over
        </button>
      )}
    </main>
  )
}
