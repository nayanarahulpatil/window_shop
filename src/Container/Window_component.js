import React,{ useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Window_component = () => {

    const windowdetails = useSelector((state) => state.alldata.windowdata);
   
const[dataurl,seturl]= useState("https://picsum.photos/id/1059/400/500");

const imagerender = (listid) => {
     
  windowdetails.find((element) => {

    if (element.id === listid) {
        
        seturl(element.window_url);
        
    }

})
}

    const click = (event) => {
        if (event.target.className == "buttonFalse") {

            event.target.className = "buttonTrue";

        } else {
            event.target.className = "buttonFalse";
        }

    }


    const datalist = windowdetails.map((windowdetail, index) => {

        const { id, heading, accessoriescount, url } = windowdetail;

        return (
            <>
                <div >
                    <NavLink style={{ textDecoration: 'none' }} exact to={`${id}`} key={id}>
                        <div className=' card d-flex flex-row align-self-stretch mt-2 mx-1 p-0 carddiv' onClick={() => imagerender(id)} >

                            <div className=" flex-grow-1 pt-2  px-2 ">
                                <h6 className='header nodecoretion'>{heading}</h6>
                                <p className='nodecoretion'>{accessoriescount}
                                Accessories</p>
                                <button className='buttonFalse' onClick={click} key={id}>on</button>
                            </div>

                            <div className='float-end'>
                                <img src={url} className="img-fluid imageside " alt="image" />
                            </div>
                        </div>

                    </NavLink>

                </div>
            </>
        );
    })

    return (<>
        <div className='container-fluid visible-xs'>
            <div className='row mt-2 p-1 mx-1'>
                <div className="col-12 col-md-8 ">
                    {datalist}
                </div>
                <div className="col-12 col-md-4  windowimage">
                <img src={dataurl} className="img-fluid window_imag"  alt="image" />
                </div>
            </div>
        </div>
    </>

    );

};

export default Window_component;