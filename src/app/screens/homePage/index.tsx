import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopProducts } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";

/* reduxe slice selector */

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopProducts: (data: Product[]) => dispatch(setTopProducts(data)),
});

export default function HomePage() {
  const { setPopularDishes, setNewDishes, setTopProducts } = actionDispatch(
    useDispatch()
  );
  // selector: store => date

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data);
      });

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        // productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setNewDishes(data);
      });

    product
      .getTopProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
      })
      .then((data) => {
        setTopProducts(data);
      });

    // const member = new MemberService();
    // member
    //   .getTopUsers()
    //   .then((data) => {
    //     setTopUsers(data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  //backend server data

  return (
    <div className="homepage">
      <Statistics />
      <div className="homepage-bgcolor">
        <div className="background-brand-svg">
          <PopularDishes />
          <NewDishes />
        </div>
        <Advertisement />
        <ActiveUsers />
        <Events />
      </div>
    </div>
  );
}
