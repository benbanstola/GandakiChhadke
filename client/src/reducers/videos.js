export default function(state={},action){
    switch(action.type){
        case 'GET_VIDEOS':
            return{loading:true,
                ...state,
                list:action.payload
            }
        
        

       default:
           return state; 
    } 
 }