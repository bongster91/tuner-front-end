import { Link } from 'react-router-dom';

function Song({ song }) {
    return (
        <div>
            <Link to={`/songs/${song.id}`}>{song.name}</Link>
            {' '}by {song.artist}
        </div>
    );
};

export default Song;
