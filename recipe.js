const searchbtn = document.getElementById('get').addEventListener("click" ,getList)
function getList(){
let result = document.getElementById('search-btn').value;
 fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${result}`)
 .then(res => res.json())
 .then(data => {
    console.log(data)
 })
}
