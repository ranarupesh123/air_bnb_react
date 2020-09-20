import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
      <Home/>
      </Route>
      <Route path="/search">
        <SearchPage/>
        </Route>
      </Switch>
      <Footer/>
      </Router>
    </div>
  )
}

export default App;