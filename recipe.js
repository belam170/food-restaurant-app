const searchBtn = document.getElementById('get');
const mealList = document.getElementById('eatup');

searchBtn.addEventListener('click', getList)

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
              <a class="lik" href="#">Get recipe</a>
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
