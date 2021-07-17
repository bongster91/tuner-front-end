import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiURL } from '../util/apiURL';

const API = apiURL();

function EditSong({ history, match }) {
    let { id } = match.params;

    const [ song, setSong ] = useState({
        album: '',
        artist: '',
        is_favorite: false,
        name: '',
        time: ''
    });

    const updateSong = (updatedSong) => {
        axios
            .put(`${API}/songs/${id}`, updatedSong)
            .then(
                () => history.push(`/songs/${id}`),
                (e) => console.error(e)
            )
            .catch(
                (c) => console.warn('catch', c)
            )
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSong(song, id)
    };

    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value });
    };

    const handleCheckbox = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    useEffect(() => {
        axios
            .get(`${API}/songs/${id}`)
            .then(
                (response) => setSong(response.data),
                (e) => console.error(e)
            )
            .catch(
                (c) => console.warn('catch', c)
            )
    }, [id, history])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input 
                    id='name'
                    value={song.name}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Song Name'
                    required
                />

                <label htmlFor='artist'>Artist: </label>
                <input 
                    id='artist'
                    value={song.artist}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Artist Name'
                    required
                />

                <label htmlFor='album'>Album: </label>
                <input 
                    id='album'
                    value={song.album}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Album Name'
                    required
                />

                <label htmlFor='time'>Time: </label>
                <input 
                    id='time'
                    value={song.time}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='0:00'
                    required
                />

                <label htmlFor='is_favorite'>Favorite: </label>
                <input 
                    id='is_favorite'
                    type='checkbox'
                    onChange={handleCheckbox}
                    checked={song.is_favorite}
                />

                <button type='submit'>Submit</button>
            </form>

            <Link to={`/songs/${id}`}>
                <button>Cancel Edit</button>
            </Link>
        </div>
    );
};

export default withRouter(EditSong);
