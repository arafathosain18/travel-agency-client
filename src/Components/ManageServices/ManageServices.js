import React, { useEffect, useState } from 'react';
import ManageDataTable from '../ManageDataTable/ManageDataTable';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [manage , setManage] = useState([]);
    useEffect(()=>{
        fetch('https://still-hamlet-86672.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setManage(data))
    }, [])
    return (
        <div className="container-fluid row mt-5" >
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Manage Services</h5>
            
             <ManageDataTable manage={manage}></ManageDataTable> 

        </div>
    </div>
    );
};

export default ManageServices;