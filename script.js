var searchEl = document.querySelector(".search-element");
var searchBox = document.querySelector("#search-box");
var searchList = document.getElementById("search-list");
var resultGrid = document.getElementById("result-grid");
var submitBtn = document.querySelector(".btn");
var queryString = "https://imdb8.p.rapidapi.com/title/find?q=";
var titleInputEl = localStorage.getItem("title");

function getApi(titleInputEl) {
  $("#search-box").keyup(function () {
    var titleInput = $("#search-box").val();
    localStorage.setItem("title", titleInput);
  });
  fetch(queryString + titleInputEl, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "7bcb070182msh9ec64d92de5290fp172062jsneabea1bba3ec",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var list = data.results;
      list.map((item) => {
        console.log(item);
        var title = item.title;
        var img = item.image.url;
        var year = item.year;
        var movie = `<li><h2>${title}, ${year}</h2><img src="${img}"</li>`;
        document.querySelector(".search-list").innerHTML += movie;
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

// function handleSubmit(){
// window.location.reload();
// }

submitBtn.addEventListener("click", getApi(titleInputEl));

// if(document.getElementById('submit').clicked == true)
// {
//    alert("button was clicked");
// }