export function generateRecipe() {
  fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&number=12",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "6127f14de5msh612ece9ab1405a8p1e0f35jsnd4ba0173c7d7",
      },
    }
  )
    .then((response) => {
      response.json().then( data => {
        console.log(data);
      })
    })
    .catch((err) => {
      console.error(err);
    });
}
