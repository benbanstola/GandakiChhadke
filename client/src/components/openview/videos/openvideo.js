import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getVideo} from '../../../actions/action';
import Spinner from '../../../UI/spinner';
import classes from './openvideo.module.css';

class Openview extends Component {
  state = {  }



componentWillMount(){
    this.props.dispatch(getVideo(this.props.match.params.id))
}
renderItems=(videos)=>{
  
  return(
    videos.list?<div className={classes.container}>
      <p className={classes.title}> {videos.list.videos.title}</p>
    <div className={classes.vidcontainer}>
    <iframe  src={"http://www.youtube.com/embed/"+videos.list.videos.id}>
</iframe>
    </div>
    <p className={classes.body}> {videos.list.videos.description? videos.list.videos.description:"Click to play the video. "}</p>
</div>:<Spinner />
  
  )}
  
  render() { 


    return (<div>
       <div className={classes.videos}>
                 { this.renderItems(this.props.videos)}
             </div> 

    </div>  );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      videos: state.videos
  }
}
 
export default connect(mapStateToProps)(Openview);