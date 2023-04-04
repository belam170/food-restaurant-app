// const app_id = "b7cef4c2";
// const app_key = "8d46eb050f0da360da5bf95c3b4d01c3";
// const query = "chicken"; // the keyword to search for
// const base_url = "https://api.edamam.com/search";

// // construct the API endpoint URL with query parameters
// const url = `${base_url}?q=${query}&app_id=${app_id}&app_key=${app_key}`;

// // send a GET request to the API endpoint URL
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // extract the recipe details from the JSON response
//     data.hits.forEach(recipe => {
//       console.log(recipe.recipe.label);
//       console.log(recipe.recipe.url);
//       console.log(recipe.recipe.image);
//       console.log(recipe.recipe.ingredients);
//       console.log("------------------------");
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });
