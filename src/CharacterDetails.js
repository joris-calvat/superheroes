import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Character from './Character';
import Loader from './Loader';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './CharacterDetails.css';

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

  getList(title, list) {

    if(list.available === 0) return null

    return <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="headline">{title} ({list.available})</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="listItems">
        {list.items.map((item, index) => (<div key={`comics-${index}`} className="listItem">
          <Typography variant="body2"><a href={item.resourceURI} target="_blank">{item.name}</a></Typography>
        </div>))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  }

  render() {
    const { details } = this.state;

    if(details === null) return <Loader />

    const thumbnail = `${details.thumbnail.path}.${details.thumbnail.extension}`;

    return <div className="characterDetails">
      <div className="picture">
        <img src={thumbnail} alt={details.name} />
      </div>
      <div className="details">
        <Typography variant="display1" className="detailsTitle">{details.name}</Typography>
        <Typography variant="body2" className="detailsDescription">{details.description}</Typography>
        <div className="detailsLists">
          {this.getList('comics', details.comics)}
          {this.getList('series', details.series)}
          {this.getList('stories', details.stories)}
        </div>
      </div>
    </div>;
  }
}

export default CharacterDetails