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

document.getElementById('getMovies').addEventListener('click', getMovies);
document.getElementById('getMovies').addEventListener('keypress', function(e){ 
  if (e.key === 'Enter') {
    getMovies()
  }
});

function getPosts() { 
    fetch('https://api.themoviedb.org/3/search/movie?api_key=56b548ffac684aba0fcfddb46a52bba5')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach((post) => {
            output += `
          <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
            `;
        });
    document.getElementById('output').innerHTML = output;
    })
}

function getImages() {
  let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
    fetch(url)
    .then((result)=>{
      return result.json();
    })
    .then((data)=>{
      baseImageURL = data.images.secure_base_url;
      configData = data.images;
      console.log('config:', data);
})}

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