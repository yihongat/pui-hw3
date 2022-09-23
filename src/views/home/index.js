import React from "react";
import Item from "../../components/Item/Item";
import Navbar from "../../components/Navbar/Navbar";
import { ROLLS } from "./items";

export function Roll(type, price, glazing, packSize) {
    this.type = type;
    this.price = price;
    this.glazing = glazing;
    this.packSize = packSize
  }

const Home = () => {

  return (
    <React.Fragment>
      <Navbar/>
      <section className="menuList">
        {ROLLS.map(({type, price, image}) => <Item type={type} price={price} image={image} />)}
      </section>
    </React.Fragment>
  );
};

export default Home;
