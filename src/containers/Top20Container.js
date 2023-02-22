import React, {useEffect, useState} from 'react';
import SongList from '../components/SongList';

const Top20Container = () => {

        const [top20, setTop20] = useState([]);
        
        useEffect(() => {
          getSongs();
        }, [])

        const getSongs = function(){
                fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
                .then(res => res.json())
                .then(top20 => setTop20(top20.feed.entry));
                console.log(top20)
        }
        
        return(
        <div>
        <SongList songs={top20}/>
        </div>
        )
}

export default Top20Container;