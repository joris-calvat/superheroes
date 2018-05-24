import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Character.css'

class Character extends React.Component {


  render() {
    const { infos } = this.props;
    const thumbnail = `${infos.thumbnail.path}.${infos.thumbnail.extension}`;
    const { name } = infos;
    const { comicLink, available } = infos.comics
    
    const buttons = infos.urls.map((link, index) => (
      <Button href={link.url} target="_blank" key={`character-${infos.id}-button-${index}`}>
        {link.type}
      </Button>
    ))

    return <div className="character">
      <Card>
        <Link to={`/character/${this.props.infos.id}`}> <CardMedia
          className="characterThumbnail"
          image={thumbnail}
          title={name}
        />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="headline" component={Link} to={`/character/${this.props.infos.id}`}>
              {name}
          </Typography>
        </CardContent>
        <CardActions>
          {buttons}
        </CardActions>
      </Card>
    </div>
  }
}

export default Character