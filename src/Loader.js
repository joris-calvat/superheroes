import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import './Loader.css'

const Loader = () => (
    <div className="loader">
        <CircularProgress />
        <Typography>loading</Typography>
    </div>
)

export default Loader