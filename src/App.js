import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Characters = () => (<div>Characters</div>)
const CharacterDetails = () => (<div>Character details</div>)

const App = () => (
<Router>
    <div>
      <ul>
        <li>
          <Link to="/">Characters</Link>
        </li>
        <li>
          <Link to="/character">Character details</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Characters} />
      <Route path="/character" component={CharacterDetails} />
    </div>
  </Router>
)

module.exports = App