import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function OrderList() {
    const [orderList, setOrderList] = useState([]);
  
    useEffect(() => {
      Axios.get("http://103.186.185.127:8082/orders")
        .then((response) => {
          const allOrders = response.data.data;
          setOrderList(allOrders);
          console.log(allOrders);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return orderList.map((order) => (
      <tr className="bg-warning">
        <th scope="row" className="px-6 py-4 font-weight-bold text-dark">
          {order.userId}
        </th>
        <td className="px-6 py-4">{order.firstName}</td>
        <td className="px-6 py-4">{order.lastName}</td>
        <td className="px-6 py-4">{order.mobile}</td>
        <td className="px-6 py-4">{order.email}</td>
        <td className="px-6 py-4">{order.tax}</td>
        <td className="px-6 py-4">{order.shipping}</td>
        <td className="px-6 py-4">{order.total}</td>
        <td className="px-6 py-4">
        {/* <div className="btn-group" role="group">
          <EditUser user={user} />
          <ViewUser user={user} />
          </div> */}
        </td>
      </tr>
    ));
  }
  