const searchBtn = document.getElementById('get');
const mealList = document.getElementById('eatup');

// event listeners
searchBtn.addEventListener('click', getList);

function getList() {
  let result = document.getElementById('search-btn').value;
  fetch(`https://api.edamam.com/search?q=${result}&app_id=b7cef4c2&app_key=8d46eb050f0da360da5bf95c3b4d01c3`)
    .then(response => response.json())
    .then(data => {
      let html = "";
      if (data.hits.length > 0) {
        data.hits.forEach(hit => {
          const eatup = hit.recipe;
          html += `
            <div class="food">
              <div class="foo">
                <div class="meal" data-id="${eatup.uri}">
                  <h3>${eatup.label}</h3>
                  <img src="${eatup.image}" alt="${eatup.label}">
                  <a class="recipe-bth" href="${eatup.url}" target="_blank">Get recipe</a>
                </div>
              </div>
            </div>
          `;
        });
      } else {
        html = "No results found";
      }
      mealList.innerHTML = html;
    })
    .catch(error => console.log(error));
}


