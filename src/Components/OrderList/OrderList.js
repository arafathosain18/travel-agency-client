import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <div className="container-fluid row mt-5">
            <Sidebar></Sidebar>
            <div className=' col-md-10 p-4 pr-5' style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1>this is order list</h1>
            </div>
        </div>
    );
};

export default OrderList;