import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { apiURL } from '../util/apiURL';
import axios from 'axios';

const API = apiURL();

function SongDetail({ history, match }) {
    const [ song, setSong ] = useState([]);
    const { id } = match.params;

    useEffect(() => {
        axios
            .get(`${API}/songs/${id}`)
            .then(
                (response) => setSong(response.data),
                (err) => {
                    console.log(err);
                    history.push('/not-found');
                }
            )
            .catch(
                (c) => console.warn('catch', c)
            );
    }, [id, history]);

    const deleteSong = async () => {
        await axios
            .delete(`${API}/songs/${id}`)
            .then(
                () => history.push('/songs'),
                (e) => console.warn(e)
            )
            .catch(
                (c) => console.error(c)
            );
    };

    return (
        <div>
            <section>
                <h1>{song.name} by {song.artist}</h1>
                <h2>Album: {song.album}</h2>
                <p>Length: {song.time}</p>
                <h4>
                    Favorite:  
                    {song.is_favorite ? <span>&#x1F60D;</span> : <span>&#128530;</span>}
                </h4>
            </section>

            <Link to={`/songs`}>
                <button>Back</button>
            </Link>

            <Link to={`/songs/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={deleteSong}>Delete</button>
        </div>
    );
};

export default withRouter(SongDetail);
