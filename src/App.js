import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { apiURL } from './util/apiURL';

import NavBar from './components/NavBar';

import FourOFour from './pages/FourOFour';
import Home from './pages/Home';
import AllSongs from './pages/AllSongs';
import ShowSong from './pages/ShowSong';
import New from './pages/New';
import Edit from './pages/Edit';

const API = apiURL();

function App() {
  const [ songs, setSongs ] = useState([]);
  //let { id } = useParams();
  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => setSongs([...songs, newSong]),
        (e) => console.error(e)
      )
      .catch(
        (err) => console.warn(err)
      );
  };

  // const updateSong = () => {};

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then(
        response => setSongs(response.data),
        error => console.log('get', error)
      )
      .catch(c => console.warn('catch', c));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />

        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/songs/new'>
              <New addSong={addSong} />
            </Route>

            <Route path='/songs/:id/edit'>
              <Edit />
            </Route>

            <Route path='/songs/:id'>
              <ShowSong songs={songs} />
            </Route>

            <Route path='/songs'>
              <AllSongs songs={songs} />
            </Route>

            <Route path='*'>
              <FourOFour />
            </Route>

          </Switch>
        </main>
        
      </Router>
    </div>
  );
}

export default App;
