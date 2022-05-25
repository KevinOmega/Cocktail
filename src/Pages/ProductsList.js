import React from "react";
import List from "../Components/List";
import Loading from "../Components/Loading";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const ProductsList = () => {
  const { search, loading, list, dispatch } = useGlobalContext();

  const changeSearch = (e) => {
    dispatch({ type: "SEARCH", value: e.target.value });
  };
  return (
    <>
      <NavBar nameClass={"white-navbar"} />
      <section className="product-list" id="products">
        <div className="search">
          <label htmlFor="search">Search :</label>
          <input
            value={search}
            type="text"
            id="search"
            placeholder="Search here. eg banana"
            onChange={(e) => changeSearch(e)}
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="list">
              {list.map((item) => {
                return <List {...item} key={item.id} />;
              })}
            </div>
            <Link to={"/"} className="btn-more">
              Back Home
            </Link>
          </>
        )}
      </section>
    </>
  );
};

export default ProductsList;
