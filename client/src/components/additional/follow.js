import React from 'react';
import classes from './follow.module.css';
import FontAwesome from 'react-fontawesome';
const follow = () => {
    return (
    <div className={classes.container} >
        <h1> Follow us on: </h1>
        <FontAwesome name="youtube" className={classes.awesome}/>
        <FontAwesome name="facebook" className={classes.awesome}/>
        <FontAwesome name="twitter" className={classes.awesome}/>

    </div>  );
}
 
export default follow;