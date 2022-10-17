import React, { useState, useEffect } from 'react';
import { productProps } from './components/models';
import './components/ProductCard'
import ProductList from './components/ProductList';

function App() {
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

export default App;
