import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';


const AddReview = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        const ReviewData = {
            Name : data.name,
            CompanyName :data.occupation,
            Details : data.details
        };
        const url = `https://still-hamlet-86672.herokuapp.com/addReview`
        console.log(ReviewData)
        
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(ReviewData)
        })
        .then(res => console.log('server side responssss'))
    
        console.log(data);
    }
    return (
        <div className="container-fluid row mt-5">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input ref={register({ required: true })} type="text" className="form-control" name='name' placeholder="Your Name"/>
                    </div>
                    <div className="mb-3">
                        <input ref={register({ required: true })} type="text" className="form-control" name='occupation' placeholder="Your Occupation"/>
                    </div>
                    <div className="mb-3">
                        <textarea ref={register({ required: true })} className="form-control" name='details' placeholder='Your Review' rows="3"></textarea>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;