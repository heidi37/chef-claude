import './MainApp.css'
import {useState} from "react"

export default function Body() {

  const [ingredients, setIngredients] = useState([])

  const ingredientsList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  function handleSubmit(event){
    event.preventDefault() 
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} action=
      "">
        <input type="text" name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient"/>
        <input type="submit" value="+ Add ingredient"/>
      </form>
      <ul>
        {ingredientsList}
      </ul>
    </main>
  )
}