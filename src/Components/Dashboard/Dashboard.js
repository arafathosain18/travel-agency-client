import React, { useEffect, useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';



const stripePromise = loadStripe('pk_test_51IeCAXLP2HhUb50fwUAukFrewxNQSgPv6eLSguaRVG9xmmPcI7Hf1cM7BN0GOc8cX0RviZbZZy1xVUfnnXOBfGK700S5yPoGSM');

const Paymant = () => {
    const {destinationId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect (()=>{
        fetch('https://still-hamlet-86672.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])
    const findData = details.find(pd => pd._id === destinationId);
    return (
      <div className='row'>


          <div className='d-flex flex-column justify-content-between col-md-4 py-5 px-4' style={{ height: "100vh" }}>
             <Sidebar></Sidebar>
          </div>
          

     
       <div className='mt-5 py-5 ms-5 col-md-4'>
          
               <h1>Your Details</h1>
               <br/>
            <form>             
                    
                    <div style={{border:'1px solid',width:'400px'}} >The Service you selected: <b>{findData?.Name}</b></div>
                    <br/>
                    <div style={{border:'1px solid',width:'400px'}} >Price: <b>{findData?.Price}</b></div>
                
            </form>
        
    
       
           <h1>Pay Here</h1>
             <Elements stripe={stripePromise}>
                    <SplitCardForm></SplitCardForm>
                </Elements>
        
        
        </div>
        </div>
    );
};

export default Paymant;