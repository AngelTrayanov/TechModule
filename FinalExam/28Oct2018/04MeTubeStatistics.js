function solve(params) {
    let songs = {};
    let action = '';
    for (let i = 0; i < params.length; i++) {
        let current = params[i];

        if (current === 'stats time') {
            action = params[i + 1];
            break;
        }
        if (current.includes('-')) {
            let tokens = current.split('-');
            let name = tokens[0];
            let times = +tokens[1];
            if (!songs.hasOwnProperty(name)) {
                songs[name] = {
                    'views': times,
                    'likes': 0
                };
            } else {
                songs[name].views += times;
            }

        } else if (current.includes(':')) {
            let tokens = current.split(':');
            let likeOrNot = tokens[0];
            let name = tokens[1];
            if (likeOrNot === 'like') {
                if (songs.hasOwnProperty(name)) {
                    songs[name].likes += 1;
                }
            } else if (likeOrNot === 'dislike') {
                if (songs.hasOwnProperty(name)) {
                    songs[name].likes -= 1;
                    // if (songs[name].likes < 0) {
                    //     songs[name].likes = 0;
                    // }
                }

            }
        }

    }
    if (action === 'by likes') {
        let byLikes = Object
            .entries(songs)
            .sort((b, a) => a[1].likes - b[1].likes)
            .forEach(e => console.log(`${e[0]} - ${e[1].views} views - ${e[1].likes} likes`));
    } else if (action === 'by views') {
        let byViews = Object
            .entries(songs)
            .sort((b, a) => a[1].views - b[1].views)
            .forEach(e => console.log(`${e[0]} - ${e[1].views} views - ${e[1].likes} likes`));
    }
}

// solve(['Eninem Venom-500',
//     'like:Eninem Venom',
//     'Funny Cats-700',
//     'like:Funny Cats',
//     'like:Funny Cats',
//     'Eninem Venom-300',
//     'stats time',
//     'by likes'
// ]);
solve(['Eminem Ringer-300',
    'Messi Top Goals-500',
    'like:Eminem Ringer',
    'like:Eminem Ringer',
    'dislike:Eminem Ringer',
    'dislike:Messi Top Goals',
    'stats time',
    'by views'
]);