import React from 'react';

const ManageDataTable = ({manage}) => {
const deleteService =(id) =>{
    fetch(`https://still-hamlet-86672.herokuapp.com/delete/${id}`, {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(result =>{
        console.log( result ,'deleted successfully');
    })
    console.log(id);
}
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Days</th>
                    <th scope="col">Payment</th>
                    </tr>
                </thead>
                <tbody>
                {
                  manage.map((manage, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{manage.Name}</td>
                        <td>{manage.Price}</td>
                        <td>{manage.Days}</td>
                        <td>Credit Card</td>
                        <td> <button onClick={() => deleteService(manage._id)} >Delete</button> </td>
                     </tr>
                    
                    )
                }

                
                </tbody>
            </table>
        </div>
    );
};

export default ManageDataTable;