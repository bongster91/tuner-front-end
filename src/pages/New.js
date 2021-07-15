import NewSong from '../components/NewSong';

function New({ addSong }) {
    return (
        <div>
            <h1>New Song Form</h1>
            <NewSong addSong={addSong} />
        </div>
    );
};

export default New;
