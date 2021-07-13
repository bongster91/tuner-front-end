import Song from './Song';

function Songs({ songs }) {
    return (
        <div className='songs'>
            <section>
                <ol>
                    {songs.map((song, i) => {
                        return (
                        <li key={song.id}>
                            <Song song={song} />
                        </li>)
                    })}
                </ol>
            </section>
        </div>
    );
};

export default Songs;
