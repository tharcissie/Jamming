let api = "https://jamming-api.herokuapp.com";


const Spotify = {
  search(term) {
    //const accessToken = Spotify.getAccessToken();
    return fetch(`${api}/search?term=${term}`).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.data) {
        return [];
      }
      return jsonResponse.data.map(track => ({
        id: track.id,
        title: track.title,
        artist: track.artist.name,
        album: track.album.title,
        uri: track.link
      }));
    });
  },

  savePlaylists(name, song, token, userId) {

    return fetch(`${api}/playlist?userid=${userId}&name=${name}&songs=${song}&token=${token}`, 
 {
   method:'POST',
 }
    );
},
};

export default Spotify;