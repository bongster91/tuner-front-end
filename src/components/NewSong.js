import axios from 'axios';
import { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

function NewSong({ addSong }) {
    let history = useHistory();

    const [ song, setSong ] = useState({
        name: '',
        artist: '',
        album: '', 
        is_favorite: false,
        time: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(song);
        history.push('/songs');
    };

    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value });
    };

    const handleCheckbox = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

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
        </div>
    );
};

export default withRouter(NewSong);
