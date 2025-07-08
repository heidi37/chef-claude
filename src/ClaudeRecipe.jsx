export default function ClaudeRecipe(props){
  return(
    <section>
          {props.recipe.length > 0 && <h2>Chef Claude Recommends:</h2>}
          <p>{props.recipe}</p>
    </section>
  )
}