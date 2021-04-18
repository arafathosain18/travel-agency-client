import React  from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit= data =>{
        const AdminData = {
                Name : data.name,
                email:data.email
        };



            fetch('https://still-hamlet-86672.herokuapp.com/addAdmins',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(AdminData)
            })
            .then(res => console.log('server side responssss'))
    
            console.log(data);
    
    }

   
    return (
       <div className="container-fluid row mt-5">
           <Sidebar></Sidebar>

           <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            
                            <input ref={register({ required: true })} type="text" className="form-control"  name='name' aria-describedby="emailHelp" placeholder="Enter Name"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            
                            <input ref={register({ required: true })} type="email" className="form-control"  name='email' placeholder=" Enter Email"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Add Admin</button>
                </form>
           </div>
       </div>
    );
};

export default AddAdmin;