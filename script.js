// const movieSearchBox = document.getElementById('movie-search-box');
// const searchList = document.getElementById('search-list');
// const resultGrid = document.getElementById('result-grid');

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "7bcb070182msh9ec64d92de5290fp172062jsneabea1bba3ec"
	}
})
.then(response => response.json())
.then(data => {
    var list = data.d;
    list.map((item) => {
        console.log(item)
        const title = item.l;
        const img = item.i.imageUrl;
        const year = item.y;
        const movie = `<li><h2>${title}, ${year}</h2><img src="${img}"</li>`
        document.querySelector('.search-list').innerHTML += movie;
    })
})
.catch(err => {
	console.error(err);
});