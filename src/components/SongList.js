import React from 'react';
import Song from "./Song";

const SongList = ({songs}) => {
        const ListOfSongs = songs.map((song, index) => {
                return <Song song={song} key={index}/>
        })
  return(
        <div className='song-list'>
        <ol>
        {ListOfSongs}
        </ol>
        </div>
  )
}
export default SongList;