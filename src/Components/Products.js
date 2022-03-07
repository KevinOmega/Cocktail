import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import List from "./List";
import Loading from "./Loading";

const Products = () => {
  const { list, loading } = useGlobalContext();

  if (loading) {
    return (
      <div id="products" className="products">
        <Loading />
      </div>
    );
  }

  return (
    <div id="products" className="products">
      <h2>Products</h2>
      <div className="list">
        {list.map((item, index) => {
          if (index < 3) {
            return <List {...item} key={item.id} />;
          }
        })}
      </div>
      <Link to={"/list"} className="btn-more">
        See more
      </Link>
    </div>
  );
};

export default Products;
