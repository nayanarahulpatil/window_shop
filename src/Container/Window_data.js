import React, {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import Window_component from './Window_component';
import {setdata} from '../Redux/Actions/Action';



const Window_data = ()=>{
const windowdetail = useSelector((state)=>state);


const dispatch = useDispatch();

useEffect(() => {
    
    loaddata();
    console.log("hiiii");
}, []);


const loaddata = async()=>
{
    try{
        const responce =await fetch("./windowdata.jsx");
        const data =await responce.json();
        dispatch(setdata(data));
        console.log("hiiii"+data.heading);
    }
    catch(error){
        console.log('The error is:'+error)
    }

}


    return(
        <>
        
        
        <Window_component></Window_component>
       
        </>
    );

};

export default Window_data;