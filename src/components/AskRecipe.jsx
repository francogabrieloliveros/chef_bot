function AskRecipe(props) {
  return (
    <section className="get-recipe-container" ref={props.ref}>
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients</p>
      </div>
      <button onClick={props.getRecipe}>Get a recipe</button>
    </section>
  );
}

export default AskRecipe;
