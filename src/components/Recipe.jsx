import ReactMarkdown from "react-markdown";

function Recipe(props) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h1>Chef Claude Recommends:</h1>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}

export default Recipe;
