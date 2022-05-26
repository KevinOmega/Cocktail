import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import List from "./List";
import Loading from "./Loading";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Products = () => {
  const { list, loading } = useGlobalContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(4);
    } else if (currentIndex > 4) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  if (loading) {
    return (
      <div id="featured" className="products">
        <Loading />
      </div>
    );
  }

  return (
    <div id="featured" className="products">
      <h2>Products</h2>
      <div className="featured-center">
        {list.map((item, index) => {
          if (index < 5) {
            let nameClass = "default-card";
            if (index === currentIndex) {
              nameClass = "current-card";
            } else if (
              index === currentIndex + 1 ||
              (index === 0 && currentIndex === 4)
            ) {
              nameClass = "next-card";
            } else if (
              index === currentIndex - 1 ||
              (index === 4 && currentIndex === 0)
            ) {
              nameClass = "prev-card";
            }
            return <List nameClass={nameClass} {...item} key={item.id} />;
          }
          return;
        })}

        <span
          className="btn-prev"
          onClick={() => setCurrentIndex((currIndex) => currIndex - 1)}
        >
          <AiOutlineLeft className="btn-arrow" />
        </span>
        <span
          className="btn-next"
          onClick={() => setCurrentIndex((currIndex) => currIndex + 1)}
        >
          <AiOutlineRight className="btn-arrow" />
        </span>
      </div>
      <div className="btn-container">
        <Link to={"/list"} className="btn-more">
          See all the products
        </Link>
      </div>
    </div>
  );
};

export default Products;
