import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Characters from './Characters' 
import CharacterDetails from './CharacterDetails' 


const App = () => (
<Router>
    <div>
      <ul>
        <li>
          <Link to="/">Characters</Link>
        </li>
        <li>
          <Link to="/character/123">Character details</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Characters} />
      <Route path="/character/:id" component={CharacterDetails} />
    </div>
  </Router>
)

module.exports = App