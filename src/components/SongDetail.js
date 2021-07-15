import { useState, useEffect } from 'react';
import { Link, useParams, useHistory, withRouter } from 'react-router-dom';
import { apiURL } from '../util/apiURL';
import axios from 'axios';

function SongDetail() {
    const [ song, setSong ] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const API = apiURL();

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
    }, [id, history, API]);

    const previousPage = () => {
        return history.goBack()
    };

    const deleteSong = () => {
        axios
            .delete(`${API}/songs/${id}`)
            .then(
                () => history.push('/songs'),
                (e) => console.warn(e)
            )
            .catch(
                (c) => console.error(c)
            );
    };

    const handleDelete = () => {
        deleteSong();
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

            <button onClick={previousPage}>Back</button>
            <Link to={`/songs/${id}/edit`} song={song}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default withRouter(SongDetail);
