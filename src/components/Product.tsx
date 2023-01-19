import { useStateValue, ContextValue } from "../context/StateProvider";
import "../styles/Product.css";

export interface ProductType {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product: React.FC<ProductType> = ({
  id,
  title,
  image,
  price,
  rating,
}): JSX.Element => {
  const [, dispatch] = useStateValue() as ContextValue;

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      product: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{Array(rating).fill("🌟")}</div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
