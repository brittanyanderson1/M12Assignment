class Jukebox {
    constructor(albums = []) {
        this.albums = albums
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}
const albums = []
var jbox = new Jukebox(albums)
const album1 = new Album('Red Hot Chilli Peppers', 'Californiacation')
const album2 = new Album('Blink 182', 'All the Small Things')
const album3 = new Album('Puddle of Mud', 'Blurry')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)


const albumSelect = document.getElementById('albumSelect')
    albums.forEach((album, index) => {
      const option = document.createElement('option')
      option.value = index
      option.text = `${album.artist} - ${album.title}`
      albumSelect.appendChild(option)
    })

    const playButton = document.getElementById('playButton')
    const showFavoriteButton = document.getElementById('showFavoriteButton')
    const favoriteAlbumDiv = document.getElementById('favoriteAlbum')

    playButton.addEventListener('click', () => {
      const selectedIndex = albumSelect.value
      jbox.albums[selectedIndex].play()
      alert(`Playing ${jbox.albums[selectedIndex].title} by ${jbox.albums[selectedIndex].artist}. Played ${jbox.albums[selectedIndex].played} times.`)
    })

    showFavoriteButton.addEventListener('click', () => {
      const favorite = jbox.favoriteAlbum()
      if(favorite) {
        favoriteAlbumDiv.innerText = `Your favorite album is "${favorite.title}" by ${favorite.artist} with ${favorite.played} plays.`
    }else{
        favoriteAlbumDiv.innerText = "No albums have been played yet."
    }
    })

album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)