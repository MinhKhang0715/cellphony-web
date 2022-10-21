import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { productProps } from "../components/models";
import NavBar from "../components/NavBar";

export default function ProductsPage() {
  const [products, setProducts] = useState<productProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/smartPhones")
      .then(response => {
        if (response.ok)
          return response.json();
        throw response;
      })
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data: ", error))
  }, [])

  return (
    <div>
      <NavBar />
      <ProductList products={products} />
    </div>
  );
}