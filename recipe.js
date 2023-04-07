const searchBtn = document.getElementById('get');
const mealList = document.getElementById('eatup');
const recipeList = document.querySelector('.d')
// event listerners
searchBtn.addEventListener('click', getList)
mealList.addEventListener('click', getRecipe)

function getList() {
  let result = document.getElementById('search-btn').value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${result}`)
    .then(res => res.json())
    .then(data => {
      let html = "";
      if (data.meals) {
        data.meals.forEach(eatup => {
          html += `
          <div class ="food">
          <div clss ="foo"
            <div class="meal" data-id="${eatup.idMeal}">
            <h3>${eatup.strMeal}</h3>
              <img src="${eatup.strMealThumb}" alt="ERROR 404">
              <a  class="recipe-bth" href="#">Get recipe</a>
            </div>
            </div>
            </div>
          `;
        });
      } else {
        html = "No results found";
      }
      mealList.innerHTML += html;
    })
    .catch(error => console.log(error));
}
// get recipes insructions
function getRecipe(e){
  e.preventDefault();
if(e.target.classList.contains('recipe-bth')){
  let sach = e.target.parentElement;
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${sach.dataset.id}`)
.then(response => response.json())
.then(data => getMenu(data.meals))
}
}
function getMenu(meal){
  meal = meal[0]
  let html =`
  <h7 style=" font-size: 75%;">${meal.strMeal}</h7>
<p class="fu">${meal.strCategory}</p>
<div class="ins">
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>
    <img src="${meal.strMealThumb}">
    <a target="_blank"${meal.strYoutube}">watch video</a>
</div>
`
  recipeList.innerHTML = html;
  recipeList.classList.add('showRecipe');

}