
import {ActionType} from '../Constants/Action_type'

export const  setdata = (data)=>{
    return{
        type:ActionType.SET_DATA,
        payload:data,
    };

};
