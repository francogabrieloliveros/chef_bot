import { useState, useEffect, useRef } from "react";
import upperFirst from "/src/methods/upperFirst.js";
import Form from "/src/components/Form.jsx";
import IngredientsList from "/src/components/IngredientsList.jsx";
import AskRecipe from "/src/components/AskRecipe.jsx";
import Recipe from "/src/components/Recipe.jsx";
import { getRecipeFromMistral } from "/chefClaude";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(undefined);
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe && recipeSection)
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
  }, [recipe]);

  async function getRecipe() {
    const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    const formattedNewIngredient = upperFirst(newIngredient);

    if (!formattedNewIngredient) return;

    setIngredients((prevIngredients) => [
      ...prevIngredients,
      formattedNewIngredient,
    ]);
  }

  return (
    <main>
      <Form addIngredient={addIngredient} />
      {ingredients.length > 0 ? (
        <IngredientsList ingredients={ingredients} />
      ) : undefined}
      {ingredients.length > 3 ? (
        <AskRecipe getRecipe={getRecipe} ref={recipeSection} />
      ) : undefined}
      {recipe !== undefined ? <Recipe recipe={recipe} /> : undefined}
    </main>
  );
}

export default Main;
