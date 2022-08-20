//button id="search"
const search = document.getElementById('search');
//input id="search-song"
const searchSong = document.getElementById('search-song');
//input id="search-artist"
const searchArtist = document.getElementById('search-artist');
//input id="search-show"
const searchShow = document.getElementById('search-show');
//result div id="results"
const results = document.getElementById('results');


/*function mySongList fetches data, takes inputs, filters through data, 
finds matching data, turns matches into html readable string*/

//fetching data
const mySongList = async (textSearchSong, textSearchArtist, textSearchShow) => {
    const first = await fetch("data/data.json");
    const data = await first.json();

    //filters through data and returns array with matching songs
    let matchSong = data.filter(elem => {
        const regex = new RegExp(`${textSearchSong}`, 'gi');
        return elem.title.match(regex) 
    });

    //filters through data and returns array with matching artists
    let matchArtist = data.filter(elem => {
        const regex = new RegExp(`${textSearchArtist}`, 'gi');
        return elem.artist.match(regex) 
    });

    //filters through data and returns array with matching shows
    let matchShow = data.filter(elem => {
        const regex = new RegExp(`${textSearchShow}`, 'gi');
        return elem.anime.match(regex) 
    });

    //if all input boxes are empty, array is emptied out
    if(textSearchSong.length === 0 
        && textSearchArtist.length === 0 
        && textSearchShow.length === 0)
    {
        matchSong = []
    };

    /*filters through song, artist, and show array
    returns array that has matches from all three inputs*/
    let match = matchSong.filter(function(o1){
        return matchArtist.some(function(o2){
            return matchShow.some(function(o3){
                return o1.title === o2.title && o2.title === o3.title 
                && o1.artist === o2.artist && o2.artist === o3.artist 
                && o1.anime === o2.anime && o2.anime === o3.anime
            })
        })
    });

    //turns matches array into html readable string
    const goHtml = match => {
        const final = match.map(elem => `
        <li class="content">
            <div onclick=show(this)>
                <div class="single main-results">
                    <h4>
                        ${elem.title}
                    </h4>
                    <h4>
                        ${elem.artist}
                    </h4>
                    <h4>
                        ${elem.anime}
                    </h4>
                </div>
            </div>
            <div class="wrapper wrapper-hidden" id="wrapper">
                <p class="p1">
                    annid: ${elem.annid}
                </p>
                <p class="p2">
                    type: ${elem.type}
                </p>
                <a href=${elem.mp3} class="a1" target="_blank">
                    ${elem.mp3}
                </a>
                <a href=${elem[720]} class="a2 target="_blank"">
                    ${elem[720]}
                </a>
                <a href=${elem[480]} class="a3 target="_blank"">
                    ${elem[480]}
                </a>
            </div>
        </li>
        `).join('');
        results.innerHTML = final;
    }

    //calls html conversion function
    goHtml(match);
};

//upon button press, calls function
search.addEventListener('click', 
() => mySongList(searchSong.value, searchArtist.value, searchShow.value));