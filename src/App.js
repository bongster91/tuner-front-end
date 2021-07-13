import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { apiURL } from './util/apiURL';

import NavBar from './components/NavBar';

import FourOFour from './pages/FourOFour';
import Home from './pages/Home';
import AllSongs from './pages/AllSongs';

const API = apiURL();

function App() {
  const [ songs, setSongs ] = useState([]);
  let { id } = useParams();


  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then(
        response => setSongs(response.data),
        error => console.log('get', error)
      )
      .catch(c => console.warn('catch', c));
  }, [API]);

  return (
    <div className="App">
      <Router>
        <NavBar />

        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
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
