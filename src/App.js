import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import FourOFour from './pages/FourOFour';
import Home from './pages/Home';
import AllSongs from './pages/AllSongs';
import ShowSong from './pages/ShowSong';
import New from './pages/New';
import Edit from './pages/Edit';

function App() {
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
              <New />
            </Route>

            <Route path='/songs/:id/edit'>
              <Edit />
            </Route>

            <Route path='/songs/:id'>
              <ShowSong />
            </Route>

            <Route path='/songs'>
              <AllSongs />
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
