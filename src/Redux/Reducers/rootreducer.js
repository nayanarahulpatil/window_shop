import {combineReducers} from 'redux';
import {windowdataReducer} from '../Reducers/windowdata_Reducer';

 const reducers = combineReducers({
    alldata: windowdataReducer,

});
export default reducers;