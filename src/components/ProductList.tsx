import React from "react";
import { products } from "./models";
import ProductCard from "./ProductCard";
import './style.css'

export default function ProductList({ products, loading }: products) {
  if (loading) return <h2>Fetching data...</h2>
  
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}
