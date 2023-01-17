import { ContextValue, useStateValue } from "../context/StateProvider";
import { productType } from "./Product";
import "../styles/CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }: productType) {


  const [, dispatch] = useStateValue() as ContextValue;

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="checkoutProduct__image"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill("🌟")}
        </div>
        {<button onClick={removeFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
