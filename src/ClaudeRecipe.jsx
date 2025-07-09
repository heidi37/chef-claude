import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
  return(
    <section aria-live="polite">
          {props.recipe.length > 0 && <h2>Chef Claude Recommends:</h2>}
          <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}