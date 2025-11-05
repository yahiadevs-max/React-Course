import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../Components/Header';
import { ProductsGrid } from './ProductsGrid';

import './HomePage.css'

export function HomePage({cart, loadCart}) {

    const [product, setProduct] = useState([]);

    useEffect( () => {
        const getHomeData = async () =>{
                  const response = await axios.get('/api/products');
                  setProduct(response.data); 
            };
            getHomeData();
            }, []);
  
  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart ={cart}/>

      <div className="home-page">

       <ProductsGrid product ={product} loadCart={loadCart}/> 
       
      </div>
    </>
  );
}