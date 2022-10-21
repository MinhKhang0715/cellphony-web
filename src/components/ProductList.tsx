import React from "react";
import { products } from "./models";
import ProductCard from "./ProductCard";
import './style.css'

export default function ProductList({ products }: products) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
}
