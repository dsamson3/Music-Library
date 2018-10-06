// Class of Library takes name and creator (both strings), has many playlists can add playlist to instance of library

class Library{
    constructor(name,creator){
        this.name = name;
        this.creator = creator;
        this.playlists = [];
    }
    addPlaylist(playlist){
        this.playlists.push(playlist);
    }
};

//Each Playlist has a name, required upo creation, playlist also has many tracks

class Playlist{
    constructor(name){
        this.name = name;
        this.tracks = [];
    }

    addTrack(track){
        this.tracks.push(track)
    }
    // Function for overall rating calc avg rating of its tracks
   get playlistRating(){
        let currentRating = 0;
        for(let track in this.tracks){
            currentRating += this.tracks[track].rating
        }
        return currentRating/this.tracks.length
    }
    // function for total duration calc summ of all its tracks
    get playlistDuration(){
        let currentDuration = 0;
        for(let trackLength in this.tracks){
            currentDuration = this.tracks[trackLength].duration
        }
        return currentDuration 
    }

}


// track has a title, a rating(int 1-5), length(int in sec) required when creating new track
class Track {
    constructor(tittle, rating, duration){
        this.tittle = tittle;
        this.rating = rating;
        this.duration = duration;
    }
}


const rnbLibrary = new Library("sweet-lou", "me");
const rnbPlaylist = new Playlist("rnb 2 electric boogaloo");
const track1 = new Track ("miss you", 5, 200);
const track2 = new Track("kiss you", 4, 300);
rnbPlaylist.addTrack(track1);
rnbPlaylist.addTrack(track2);
rnbLibrary.addPlaylist(rnbPlaylist);
console.log(rnbLibrary);
console.log(rnbPlaylist);
console.log('Playlist Rating', rnbPlaylist.playlistRating);
console.log("Playlist Duration", rnbPlaylist.playlistDuration);
console.log(rnbLibrary.playlists[0].tracks);