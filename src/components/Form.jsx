function Form(props) {
  return (
    <form action={props.addIngredient}>
      <input
        type="text"
        placeholder="e.g. oregano"
        aria-label="Add Ingredient"
        name="ingredient"
        required
      />
      <button type="submit">Add Ingredient</button>
    </form>
  );
}

export default Form;
