function solve(input) {

    let movieList = [];

    for(let line of input){

        if (line.includes('add movie')) {
            let tokens = line.split('add movie ').filter(m=>m!='');
            let movieName = tokens[0];
            let current = {
                name:movieName
            }
            movieList.push(current);
        } else if (line.includes('directed by')) {
            let tokens = line.split(' directed by ').filter(m=>m!='');
            let movieName = tokens[0];
            let director = tokens[1];
            let movie = movieList.find(m=>m.name===movieName);
            if (movie != undefined) {
                movie['director'] = director;
            }
        } else if (line.includes('on date')) {
            let tokens = line.split(' on date ').filter(m=>m!='');
            let movieName = tokens[0];
            let movieDate = tokens[1];
            let movie = movieList.find(m=>m.name===movieName);
            if (movie != undefined) {
                movie['date'] = movieDate;
            }
        }
    }
    for(let movie of movieList){
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve(['add movie Fast and Furious',

    'add movie Godfather',

    'Inception directed by Christopher Nolan',

    'Godfather directed by Francis Ford Coppola',

    'Godfather on date 29.07.2018',

    'Fast and Furious on date 30.07.2018',

    'Batman on date 01.08.2018',

    'Fast and Furious directed by Rob Cohen'
]);