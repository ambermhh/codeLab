const KEY = 'eedf044d607fbf0d43e5582fab12db0a';

fetch(`/mytest/movieData`)
 .then(response => response.json())
    .then(data => {
        console.log(data);
        makeMap(data.results);
    })
 .catch(err => {
        console.log(err);       
    });

    function makeMap (data){
        data.map((item) => {
            const name = item.title;
            let temp = document.getElementById('movieCard');
            clon = temp.content.cloneNode(true);
            clon.querySelector('.card-title').innerText=name;
            clon.querySelector('.card-img-top').src='https://image.tmdb.org/t/p/w1280'+item.poster_path;
            clon.querySelector('.card-text').innerText=item.overview;
            clon.querySelector('.movie-date').innerText=item.release_date;
            clon.querySelector('.score').innerText=item.vote_average;
            document.getElementById('movies').appendChild(clon);

            function movieScore(){
                let scoreElements = document.getElementsByClassName('score');
                for (let i = 0; i < scoreElements.length; i++) {
                  let score = parseFloat(scoreElements[i].innerHTML);
                  if (score >= 7.5) {
                    scoreElements[i].style.color = "green";
                  } else if (score >= 7) {
                    scoreElements[i].style.color = "orange";
                  } else {
                    scoreElements[i].style.color = "red";
                  }
                }
              }
              
              movieScore();
        })
    } ;
 

