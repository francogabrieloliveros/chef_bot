function IngredientsList(props) {
  const ingredientsElements = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <section className="list-container">
      <h2>Ingredients on Hand:</h2>
      <ul>{ingredientsElements}</ul>
    </section>
  );
}

export default IngredientsList;
