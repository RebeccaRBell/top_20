import React from 'react';

const Song = ({song}) => {

  return(
        <li><img src={song['im:image'][0].label} alt='song artwork'/><br/>
        <span>{song['im:artist'].label}</span><br/>
        <span>{song['im:name'].label}</span><br/>
        <audio controls>
                <source src={song['link'][1].attributes.href}/>
        </audio>
        </li>
  )
}

export default Song;