import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Character from './Character';
import CircularProgress from '@material-ui/core/CircularProgress';


class Characters extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
    this.getCharactersFromApi()
  }

  getCharactersFromApi() {
    axios.get('/api/characters').then(response => {
      this.setState({
        characters: response.data.data.results
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    console.log(this.state.characters)
    const { characters } = this.state 
    
    if(characters.length === 0) return <CircularProgress />

    return <div>
      {characters.map(character => (<Character infos={character} key={`character${character.id}`} />))}
    </div>;
  }
}

export default Characters