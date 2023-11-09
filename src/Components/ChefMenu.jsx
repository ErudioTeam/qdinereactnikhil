import React from 'react'
import Dashboard from './Dashboard'
import OrderList from './OrderList'

function OwnerMenu() {
    return (
        <div>
            <Dashboard />
            <h2 className='mt-2'>Orders List</h2>
            <div className="container mt-5">
                <div className="table-responsive mt-4">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Email</th>
                                <th scope="col">Tax</th>
                                <th scope="col">Shipping</th>
                                <th scope="col">Total</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderList />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OwnerMenu