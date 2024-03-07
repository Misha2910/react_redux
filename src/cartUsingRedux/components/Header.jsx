import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const cartItem = useSelector((state) => state.cartItem);
  console.log(cartItem.length);

  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{cartItem.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
    </div>
  );
}

export default Header;
