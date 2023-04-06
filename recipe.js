const searchBtn = document.getElementById('get');
const mealList = document.querySelector('.meal');

searchBtn.addEventListener('click', getList);

function getList() {
  let result = document.getElementById('search-btn').value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${result}`)
    .then(res => res.json())
    .then(data => {
      let html = "";
      if (data.meals) {
        data.meals.forEach(meal => {
          html += `
            <div class="meal" data-id="${meal.idMeal}">
            <h3>${meal.strMeal}</h3>
              <img src="${meal.strMealThumb}" alt="ERROR 404">
              <a class="lik" href="#">Get recipe</a>
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
