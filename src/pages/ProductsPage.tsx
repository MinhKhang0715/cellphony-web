import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { productProps } from "../components/models";

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
      <ProductList products={products} />
    </div>

  );
}