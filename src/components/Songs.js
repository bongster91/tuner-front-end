import Song from './Song';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

const API = apiURL();

function Songs() {
    const [ songs, setSongs ] = useState([]);

    useEffect(() => {
        axios
          .get(`${API}/songs`)
          .then(
            response => setSongs(response.data),
            error => console.log('get', error)
          )
          .catch(c => console.warn('catch', c));
    }, []);

    return (
        <div className='songs'>
            <section>
                <ol>
                    {songs.map((song, i) => {
                        return (
                        <li key={song.id}>
                            <Song song={song} />
                        </li>)
                    })}{console.log(songs)}
                </ol>
            </section>
        </div>
    );
};

export default Songs;
