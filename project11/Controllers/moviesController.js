
const KEY = 'eedf044d607fbf0d43e5582fab12db0a';

function moviesData(req,res){
fetch(`https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=${KEY}&page=1`)
 .then(response => response.json())
    .then(data => {
        console.log(data);
      res.json(data)
    })
 .catch(err => {
        console.log(err);       
    });}

 
    module.exports = {
   
        moviesData,
    }