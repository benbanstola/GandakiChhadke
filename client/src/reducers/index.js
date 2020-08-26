import {combineReducers} from 'redux';
import videos from './videos';
import all from './all';
import video from './video';


const rootReducer=combineReducers({
    video,
    videos,
    all,

})

export default rootReducer;