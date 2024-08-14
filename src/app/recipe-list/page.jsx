import RecipeList from "@/components/recipe-list";


async function fetchAllRecipeList(){

  try{
  const response = await fetch('https://dummyjson.com/recipes');

  const data = await response.json();
  return data?.recipes;

  } catch(error){
    console.error('Error:', error);
    return [];
  }
}

export default async function Recipes(){
 const recipeList =await fetchAllRecipeList();
 return <RecipeList recipeList={recipeList}/>
}