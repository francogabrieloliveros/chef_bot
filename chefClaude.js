import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and 
suggests a recipe they could make with some or all of those ingredients. You 
don't need to use every ingredient they mention in your recipe. The recipe 
can include additional ingredients they didn't mention, but try not to include 
too many extra ingredients. Format your response in markdown to make it easier 
to render to a web page

try to format it in this manner:

## (ensure space here) Dishname:

Based on your avaible ingredients, I would reccomend making a [dishname](dish recipe url). Heres 
  the recipe:

## (ensure space here) Ingredients:
  [unordered list of ingredients]

## (ensure space here) Instructions:
  [ordered list of ingredients]

Enjoy!

and note, PLEASE AVOID HTML SYNTAX, ONLY MARKDOWN FORMAT
`;

const hfAccessToken = import.meta.env.VITE_HF_ACCESS_TOKEN;
const hf = new InferenceClient(hfAccessToken);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "HuggingFaceH4/zephyr-7b-beta",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 512,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
