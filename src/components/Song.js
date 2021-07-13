import { Link } from 'react-router-dom';

function Song({ song }) {
    return (
        <div className='individualSong'>
            <Link to={`/songs/${song.id}`}>
                {song.title} by {song.artist}
            </Link>
            Favorite: {song.is_favorite}
            Length: {song.time}
        </div>
    );
};

export default Song;
