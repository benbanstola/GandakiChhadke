import React, { Component } from 'react';
import {connect} from 'react-redux';
import classes from './home.module.css';
import {getAll} from '../../actions/action';
import Titlevideo from '../../components/showVideos/titleVideo.js';
import Showvideo from '../../components/showVideos/showvideo';
import Everyweek from '../../components/everyweek';
import Follow from '../../components/additional/follow';
import Shownews from '../../components/news/news';
import About from '../../components/about/about';
import Spinner from '../../UI/spinner';
import { Link } from 'react-router-dom';
class Home extends Component {
state={
}
componentWillMount(){
    this.props.dispatch(getAll(3,0))
   
}

renderItems=(videos)=>{
    return(
      
    videos.videos.list?
    <div><Titlevideo {...videos.videos.list.videos.videos[0]} /> 
    {videos.videos.list.videos.videos.slice(1).map(onevideo=>( 
                <Showvideo {...onevideo} key={onevideo._id}/> ))}
    
    </div>
    
    :<Spinner />
    
    )}
renderPopularItems=(videos)=>{
        return(
            videos.videos.list?videos.videos.list.popvideos.videos.map(onevideo=>( 
                <Showvideo {...onevideo} key={onevideo._id}/> )):<Spinner />
                
                )}
    render(props) { 
        return (
             <div>
               { this.renderItems(this.props)}
               <button className={classes.click} onClick={()=>this.props.history.push('/videos')}>More Videos</button>
               <Everyweek />
               <p className={classes.topic}> Popular Videos</p>
               { this.renderPopularItems(this.props)}
               <button className={classes.click} onClick={()=>this.props.history.push('/videos')}>More Videos</button>
               <Follow />
               <p className={classes.topic}> News</p>
               <Shownews topic={"News"} />
               <button className={classes.click} onClick={()=>this.props.history.push('/')}>More News</button>
               <About />

             </div> 
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("home state",state)
     return {
         videos: state.all
     }
}
export default connect(mapStateToProps)(Home);