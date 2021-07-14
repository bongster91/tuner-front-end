import { useState, useEffect } from 'react';
import { Link } from 'react';

function SongDetail({ song, id }) {
    return (
        <div>
            {song}
            {id}
        </div>
    );
};

export default SongDetail;
