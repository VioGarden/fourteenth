const search = document.getElementById('search');
const results = document.getElementById('results');

const mySongSearch = async searchText => {
    const hold = await fetch("data/data.json");
    const data = await hold.json();

    let matches = data.filter(elem => {
        const regex = new RegExp(`${searchText}`, 'gi')
        return elem.title.match(regex)
    })

    if(searchText.length === 0){
        matches = []
        results.innerHTML = ''
    }

    const goHTML = matches => {
        if(matches.length > 0){
            const correct = matches.map(elem => `
            <div>
                <h4>
                    ${elem.title} - ${elem.artist} | ${elem.anime}
                </h4>
            </div>
            `).join('')
            results.innerHTML = correct
        }
    }
    goHTML(matches)
}

search.addEventListener('input', () => mySongSearch(search.value))