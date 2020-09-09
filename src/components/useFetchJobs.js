import { useReducer } from "react"
import { useEffect } from "react"
import axios from "axios";
const ACTIONS_CONSTANTS = {
    MAKE_REQUEST:"MAKE_REQUEST",
    GET_DATA:"GET_DATA",
    ERROR:"ERROR"
}

const BASE_URL = "https://jobs.github.com/positions.json";
function reducer(state,action){
    switch(action.type){
        case ACTIONS_CONSTANTS.MAKE_REQUEST:
            return {loading:true,jobs:[]}
        case ACTIONS_CONSTANTS.GET_DATA:
            return {...state,loading:false,jobs:action.payload.jobs}

        case ACTIONS_CONSTANTS.ERROR:
            return {...state,loading:false,error:action.payload.error}
        default:
            return state;
    }
}
export default function useFetchJobs(params,page){
    const [state,dispatch] = useReducer(reducer,{jobs:[],laoding:true});

    useEffect(()=>{
        dispatch({type:ACTIONS_CONSTANTS.MAKE_REQUEST});
        axios.get(BASE_URL,{
            parmas:{markdown:true,page:page,...params}
        }).then(res=>{
            dispatch({type:ACTIONS_CONSTANTS.GET_DATA,payload:{jobs:res.data}})
        }).catch(e=>{
            dispatch({type:ACTIONS_CONSTANTS.ERROR,payload:{error:e}})
        })
    },[params,page]);
    return state;
}