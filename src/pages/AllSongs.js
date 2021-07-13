import Songs from '../components/Songs';

function AllSongs({ songs }) {
    return (
        <div>
            <h1>All Songs</h1>
            <Songs songs={songs}/>
        </div>
    );
};

export default AllSongs;
