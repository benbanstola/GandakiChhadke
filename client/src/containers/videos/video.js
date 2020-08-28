import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getVideos} from '../../actions/action';
import Spinner from '../../UI/spinner';
import classes from './video.module.css';
import Showvideos from '../../components/showVideos/showvideo';
class Videos extends Component {
  state = { 
    count:0
   }



  componentWillMount(){
  
    this.props.dispatch(getVideos(10,0))
}
renderItems=(videos)=>{
  return(
    videos.list?videos.list.videos.map(onevideo=>( 
    <Showvideos {...onevideo} key={onevideo._id}/> )):<Spinner />
    
    )}

  loadmore = () => {
    this.setState((prevState, props) => ({
      count: prevState.count+ 10
  }),()=>{
    this.props.dispatch(getVideos(10,this.state.count))
    let elmnt = document.getElementById("top");
    elmnt.scrollIntoView();
  }
 ); 
    
   
    
}
loadless = () => {
  this.setState((prevState, props) => ({
    count: prevState.count- 10
}),()=>{
  this.props.dispatch(getVideos(10,this.state.count))
  let elmnt = document.getElementById("top");
  elmnt.scrollIntoView();
}
); 
}
  
  render() { 
   
    return (<div>
       <div className={classes.videos}>
         <p id="top" className={classes.topic}> Videos</p>
                 { this.renderItems(this.props.videos)}


                
                 <div className={classes.buttoncontainer}>
                 <div className={classes.click} onClick={this.loadmore}><h3 style={{textAlign:"center",padding:"2px"}}>Next</h3></div>
                 {this.state.count>0?
                  <div className={classes.click} onClick={this.loadless}><h3 style={{textAlign:"center",padding:"2px"}}>Previous</h3></div>
                  :null} </div>
             </div> 

    </div>  );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("video state",state)
  return {
      videos: state.videos
  }
}
 
export default connect(mapStateToProps)(Videos);