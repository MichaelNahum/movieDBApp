let baseURL = 'https://api.themoviedb.org/3/';
let APIKEY  = '56b548ffac684aba0fcfddb46a52bba5';

let results;

let getMovies = function () {
  let searchTerm = document.getElementById('title').value;
  let url = "".concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', searchTerm); 
    fetch(url)
    .then((result)=>result.json())
    .then(data => results = data )
    .then(() => console.log(results))
}

// document.getElementById('output').innerHTML = JSON.stringify(data, null, 4)

function getImages() {
  let searchTerm = document.getElementById('title').value;
  let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
    fetch(url)
    .then((result)=>{
      return result.json();
    })
    .then((data)=>{
      baseImageURL = data.images.secure_base_url;
      configData = data.images;
      console.log('config:', data);
      getMovies(searchTerm);
})}

document.getElementById('getMovies').addEventListener('click', getMovies);
document.getElementById('getMovies').addEventListener('keypress', function(e){ 
  if (e.key === 'Enter') {
    getMovies()
  }
});


// "https://image.tmdb.org/t/p/"

/*title
for(let i=0; i< results.results.length; i++){ 
  console.log(results.results[i].title)
}

//summary
for(let i=0; i< results.results.length; i++){ 
  console.log(results.results[i].overview)
}

//year
for(let i=0; i< results.results.length; i++){ 
  console.log(results.results[i].release_date.slice(0,4))
}*/