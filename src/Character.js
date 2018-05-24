import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

class Character extends React.Component {


  render() {
    return <div>
      <div><Link to={`/character/${this.props.infos.id}`}>{this.props.infos.name}</Link></div>
    </div>;
  }
}

export default Character