import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Characters from './Characters' 
import CharacterDetails from './CharacterDetails' 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css'

const App = () => (
  <Router>
    <div>
      <AppBar position="static" color="default">
        <Toolbar className="appToolBar">
          <Typography variant="title" color="inherit">
            <Link to="/" className="appTitle">Marvel Superheroes</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Route exact path="/" component={Characters} />
      <Route exact path="/:page" component={Characters} />
      <Route path="/character/:id" component={CharacterDetails} />
    </div>
  </Router>
)

module.exports = App