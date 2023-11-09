import React from "react";
import Dashboard from "./Dashboard";
import { CartState } from '../Context';
import { useEffect, useRef, useState } from 'react';

import SingleProduct from "./SingleProduct";


function Home(){
    const {
        state: { products },
        //productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
      } = CartState();
    
      React.useEffect(() => {
        console.log("data from home",products);
      }, [products]);

    return(
        <div>
            <Dashboard />
            <div className="home">
            {/* <Filters /> */}
                <div className="productContainer">
                    {products.map((prod) => (
                    <SingleProduct prod={prod} key={prod.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;
