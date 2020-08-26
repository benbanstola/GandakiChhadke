import React from 'react';
import classes from './news.module.css';
import Fontawesome from 'react-fontawesome';
const Shownews = (props) => {
    return (
        <div style={{marginBottom:"50px"}}>
          <div className={classes.container}>
        <p className={classes.title}> Corona Virus death toll nears 1 million worldwide.</p>
        </div>

        <div className={classes.container}>
        <p className={classes.title}> Lockdown extended for five more days in Pokhara.</p>
        </div>


          
          
          
</div>
        
  );
}
 
export default Shownews;