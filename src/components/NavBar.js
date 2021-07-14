import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h1>
                <Link to='/'>Home</Link>
            </h1>

            <h1>
                <Link to='/songs'>Songs</Link>
            </h1>
            
            <h1>
                <Link to='/songs/new'>New Song</Link>
            </h1>
        </nav>
    );
};

export default NavBar;
