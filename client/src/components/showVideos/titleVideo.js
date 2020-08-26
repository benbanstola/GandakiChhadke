import React from 'react';
import classes from './titleVideo.module.css';
import {Link} from 'react-router-dom';
const Titlevideo = (props) => {
    return (
    <div>
         <Link to={`/videos/${props._id}`} style={{textDecoration:"none"}}>
        <div className={classes.container}>
        <p className={classes.latest} > Latest Videos </p>
        <div className={classes.imgcontainer} >
        <img src={props.thumbnail} className={classes.toppic} alt="gandaki"/>
        </div>
        <p className={classes.title}> {props.title}</p>
        </div>
        </Link>

        
    </div>  );
}
 
export default Titlevideo;