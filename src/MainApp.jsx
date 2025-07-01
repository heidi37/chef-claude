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
      <ul>{ingredientsList}</ul>
    </main>
  )
}
