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

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class Character extends React.Component {


  render() {
    const { infos } = this.props;
    const thumbnail = infos.thumbnail.path;
    const { name } = infos;
    const { comicLink, available } = infos.comics
    
    const buttons = infos.urls.map((link, index) => (
      <Button size="small" color="primary" key={`character-${infos.id}-button-${index}`}>
        <Link to={link.url}>{link.type}</Link>
      </Button>
    ))

    return <div>
      <Card>
        <CardMedia
          image={thumbnail}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
              <Link to={`/character/${this.props.infos.id}`}>{name}</Link>
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