import axios from 'axios';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Header } from '../../Components/Header';
import { ProductsGrid } from './ProductsGrid';

import './HomePage.css'

export function HomePage({ cart, loadCart }) {

  const [product, setProduct] = useState([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProduct(response.data);
    };
    getHomeData();
  }, [search]);
  

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">

        <ProductsGrid product={product} loadCart={loadCart} />

      </div>
    </>
  );
}