import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { productProps } from "../components/models";
import NavBar from "../components/NavBar";
import axios from "../axios-config"
import AppPagination from "../components/Pagination";

const pageSize = 1;

export default function ProductsPage() {
  const [products, setProducts] = useState<productProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(pageSize);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('/products');
      setProducts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  let lastProductIndex = currentPage * productsPerPage;
  let firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      <ProductList products={currentProducts} loading={loading} />
      <AppPagination
        itemsPerPage={productsPerPage}
        totalItems={products.length}
        paginate={paginate}
      />
    </>
  );
}