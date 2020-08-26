import axios from 'axios';

export function getVideos(limit,skip){
const request= axios.get(`/api/getVideos?limit=${limit}&skip=${skip}`).then(response=>response.data)
return{
    type:'GET_VIDEOS',
    payload:request
}
}
export function getVideo(props){
    const request= axios.get(`/api/getVideo?id=${props}`).then(response=>response.data)
    return{
        type:'GET_VIDEO',
        payload:request
    }
    }
    export function getAll(limit,skip){
        const request= axios.get(`/api/getVideos?limit=${limit}&?skip=${skip}`)

        
        return (dispatch)=>{
        request.then(({data})=>{
            let videos=data
            axios.get(`/api/getPopularVideos?limit=${limit}&?skip=${skip}`)
            .then(({data})=>{
                let response={
                    videos,
                    popvideos:data
                }
                dispatch({
                    type:'GET_ALL',
                    payload:response
                })
            })
        })
        }
    }



