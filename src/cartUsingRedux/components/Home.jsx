import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../services/constants";
import { addToCart, removeFromCart } from "../services/actions/Actions";

function Home(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            style={{ cursor: "pointer" }}
            onClick={() =>
              dispatch(addToCart({
                price:1000,
                name:"I-Phone",
                qty:1
              }))
            }
          >
            Add To Cart
          </button>
          <button
            style={{
              marginTop: 2,
              width: 90,
              height: 45,
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={()=>dispatch(removeFromCart())}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
