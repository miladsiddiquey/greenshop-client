import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {

    // const category = [
    //     {
    //         name: "chips",
    //         category: "potetu chaips",
    //         code: "1245876",
    //         price: "432",
    //     },
    //     {
    //         name: "chips",
    //         category: "potetu chaips",
    //         code: "1245876",
    //         price: "432",
    //     },
    //     {
    //         name: "chips",
    //         category: "potetu chaips",
    //         code: "1245876",
    //         price: "432",
    //     }
    // ]

    
    const [allOrder, setAllOrder] = useState([]);
      
    useEffect(() => {
        fetch('https://quiet-everglades-43613.herokuapp.com/allOrder')
        .then(res => res.json())
        .then(data => setAllOrder(data.reverse()))       
    },[])

    return (
        <div className="admin-section">

            <div className=" mt-3">
                <div className="d-flex">
                    <h2>Manage Orders</h2>
                </div>
                <table className="table border shadow mt-3">
                    <thead className="thead-dark bg-dark" style={{ color: 'white' }} >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">city</th>
                            <th scope="col">price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((pd, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    
                                    <td>{pd.productName}</td>
                                    <td>{pd.email}</td>
                                    <td>{pd.city}</td>
                                    <td>${pd.productPrice}</td>
                                    <td className="d-flex">
                                        
                                    <select class="form-select me-2" style={{maxWidth:'110px'}} >
                                                <option selected>status</option>
                                                <option value="1">Done</option>
                                                <option value="2">Pending</option>
                                                
                                            </select>
                                        {/* <Link to="!#" className="btn btn-danger me-2" >Delete</Link> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default ManageOrder;