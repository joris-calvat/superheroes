import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import Character from './Character';
import Button from '@material-ui/core/Button';
import Loader from './Loader';
import './Characters.css'

class Characters extends React.Component {

  constructor(props) {
    super(props)
    
    const { page } = this.props.match.params
    this.state = {
      characters: [],
      page: page? parseInt(page):0
    }
    this.getCharactersFromApi()
  }

  componentWillReceiveProps(props) {
    this.setState({
      characters: [],
      page: parseInt(this.props.match.params.page)
    })
    this.getCharactersFromApi()
  }

  getCharactersFromApi() {
    axios.get('/api/characters', {
      params: {
        offset:this.state.page*20
      }
    }).then(response => {
      this.setState({
        characters: response.data.data.results
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    
    const { characters, page } = this.state 
    
    if(characters.length === 0) return <Loader />

    const navButtons=<div className="navButtons">
      <Button component={Link} to={`/${page-1}`} disabled={page <= 0}>Previous</Button>
      <Button component={Link} to={`/${page+1}`}>Next</Button>
    </div>

    return <div className="charactersContainer">
      {navButtons}
      <div className="characters">
        {characters.map(character => (<Character infos={character} key={`character${character.id}`} />))}
      </div>
      {navButtons}
    </div>
  }
}

export default Characters