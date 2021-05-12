import { ActionType } from "../Constants/Action_type";

const initialstate={
    windowdata:[]

};

export const windowdataReducer = (state=initialstate,{type,payload})=>{
    switch(type){
        case ActionType.SET_DATA:
            return {...state, windowdata:payload};
          
            default:
                return state;
                
    }
};
