import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Character from './Character';
import CircularProgress from '@material-ui/core/CircularProgress';

class CharacterDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      details: null
    };
    this.getCharacterDetailsFromApi();
  }

  getCharacterDetailsFromApi() {
    axios.get(`/api/characters/${this.props.match.params.id}`).then(response => {
      this.setState({
        details: response.data.data.results[0]
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    console.log(this.state.details)

    if(this.state.details === null) return <CircularProgress />

    return <div>
      {this.state.details.name}
    </div>;
  }
}

export default CharacterDetails