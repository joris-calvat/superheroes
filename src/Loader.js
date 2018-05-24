import React from "react";
import ReactDOM from 'react-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import './Loader.css'

const Loader = () => (
    <div className="loader">
        <CircularProgress />
        <Typography>loading</Typography>
    </div>
)

module.exports = Loader