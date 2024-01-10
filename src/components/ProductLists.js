import React, { useEffect, useState } from "react";
import Product from "./Product";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProductLists = () => {
  const apiUrl = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200,    // Offset (in pixels) from the top of the document at which the animation should trigger
      easing: 'ease-in-out', // Easing type
    });
  }, []);

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
        <div className="d-flex justify-content-end align-items-center buttons" style={{ width: "100%" }}>
        <button className="btn btn-secondary filter" onClick={() => getProducts()}>All</button>
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
            return <Product key={ind} {...product} data-aos="fade-up" data-aos-duration="1000"/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
