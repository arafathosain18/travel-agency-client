import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddDestination = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        const destinationData = {
            Name : data.destination,
            Price: data.price,
            Days : data.days,
            Details : data.description
        };
        const url = `https://still-hamlet-86672.herokuapp.com/addDestination`
        console.log(destinationData)
        
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(destinationData)
        })
        .then(res => console.log('server side responssss'))
    
    
    };

       
    return (

        <div className="container-fluid row mt-5">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="place" className="form-label">Choose Your Destination </label>
                            <input name='destination' ref={register({ required: true })} type="text" className="form-control" id="place" placeholder="Destination Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input name='price' ref={register({ required: true })} type='number' className="form-control" id="price" placeholder='Price'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="days" className="form-label">How many days wanna stay?</label>
                            <input name='days' ref={register({ required: true })} type='number' className="form-control" id="days" placeholder='Days'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Add description about the place </label>
                            <textarea name='description' ref={register({ required: true })} className="form-control" id="description" rows="3"></textarea>
                            </div>
                <br/>
                <input type="submit" />
                </form>
            </div>
        </div>
     
    );
};

export default AddDestination;