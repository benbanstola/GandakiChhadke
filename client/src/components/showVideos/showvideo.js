import React from 'react';
import classes from './showvideo.module.css';
import Fontawesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
const Showvideo = (props) => { 
  return (
      
      <div style={{marginBottom:"20px"}}>


      <Link to={`/videos/${props._id}`} style={{textDecoration:"none",color:"black"}}>

     <div className={classes.container}>
    
       <div className={classes.imgcontainer}>
       {/* <p className={classes.subtle}> Duration: {(Math.floor(props.duration/100))+ " min"}</p> */}
         <img src={props.thumbnail} className={classes.toppic} alt="gandaki"/>
        
       </div>
       <p className={classes.title}> {props.title}</p>
   </div>
   </Link>
          
          
          
</div>
        
  );
}
 
export default Showvideo;