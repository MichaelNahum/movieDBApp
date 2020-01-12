let baseURL = 'https://api.themoviedb.org/3/';
let APIKEY  = '56b548ffac684aba0fcfddb46a52bba5';

let getMovies = function () {
    let url = "".concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', 'Jack Reacher'); 
    fetch(url)
    .then((result)=>result.json())
    .then((data)=>console.log(data) )
}

document.getElementById('getMovies').addEventListener('click', getMovies);

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

function testing() {
  console.log("herro world")
}