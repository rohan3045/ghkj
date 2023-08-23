document.getElementById('search-btn').addEventListener('click', () => {
    const text = document.getElementById('search-text').value
    console.log(text)
    event.preventDefault()
    const url = `https://spotify23.p.rapidapi.com/search/?q=${text}&type=multi&limit=50&numberOfTopResults=51&rapidapi-key=c42b6779a7mshc2b445b20b31ed6p1398afjsnd9f485113e7e`
    const data = null;
    
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true;
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response)
            let output = ''
            
            for(let i=0; i < response.tracks.items.length; i++) {
                output += `
                    <div class="content" >
                    <img src="${response.albums.items[i].data.coverArt.sources[0].url}"/>
                            
                                <h3>${response.tracks.items[i].data.name}</h3>
                                <p>Singer: ${response.albums.items[i].data.artists.items[0].profile.name}</p>
                                <p>Released in year: ${response.albums.items[i].data.date.year}</p>
                                <a href="https://open.spotify.com/track/${response.tracks.items[i].data.id}" target="_blank">Listen on spotify </a>
                            
                    </div>   
                `
            }
            document.getElementById('my-div').innerHTML = output
                }
    })
    
    xhr.open('GET', url)
xhr.send(data);
})

