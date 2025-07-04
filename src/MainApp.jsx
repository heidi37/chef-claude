import "./MainApp.css"
import { useState } from "react"

export default function Body() {
  const [ingredients, setIngredients] = useState([])

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prev) => [...prev, newIngredient])
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
      {
        ingredientsList.length > 0 &&
        <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsList}
        </ul>
        { ingredientsList.length > 3 &&
          <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
        }
      </section>
      }
    </main>
  )
}
