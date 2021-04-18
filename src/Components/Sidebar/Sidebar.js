import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() =>{
        fetch('https://still-hamlet-86672.herokuapp.com/isAdmin',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({name: loggedInUser.displayName})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    }, [loggedInUser.displayName])
    return (
        <div className='col-md-4 py-5' style={{ height: "100vh" }}>

            <h3>Client Panel</h3>
        
            <br/>
            <div>
                <button className='active btn btn-warning'>Paymant</button>
                <br/>
                <br/>
                <Link to='/addReview'>
                <button className='btn btn-warning'>Add Review</button>
                </Link>
                <br/>
                <br/>
                <button className='btn btn-warning'>Book List</button>
            </div>

             <div>

                <br/>     
                <br/>  
                <br/>  
                <br/>  
                <h3>Admin Panel</h3>
                <br/>
                <br/>
                <Link to='/orderList'>
                <button className='btn btn-warning'>Order List</button>
                </Link>
                <br/>
                <br/> 
                <Link to='/addDestination'>
                <button className='btn btn-warning'>Add Service</button>
                </Link>  
                <br/>
                <br/>
                <Link to='/addAdmin'>
                <button className='btn btn-warning'>Make Admin</button>
                </Link>
                <br/>
                <br/>
                <Link to='/manageServices'>
                <button className='btn btn-warning'>Manage Services</button>
                </Link>   

            </div>
          
      
            

        </div>
    );
};

export default Sidebar;