import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductLists = () => {
  const apiUrl = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${apiUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductsInCategory = (catName) => {
    fetch(`${apiUrl}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <div>
      <h2 className="mt-4 mb-2 text-center fw-bold">Products</h2>
      <div className="container">
        <div
          className="d-flex justify-content-end align-items-center buttons"
          style={{ width: "100%" }}
          data-aos="fade-right"
        >
          <button
            className="btn btn-secondary filter"
            onClick={() => getProducts()}
          >
            All
          </button>
          {categories.map((cat, ind) => {
            return (
              <button
                key={ind}
                className="btn btn-secondary filter"
                style={{ margin: "15px 5px 25px" }}
                onClick={() => {
                  getProductsInCategory(cat);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="row">
          {products.map((product, ind) => {
            return <Product key={ind} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
