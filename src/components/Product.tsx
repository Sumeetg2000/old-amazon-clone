import { useStateValue } from "../context/StateProvider";
import "../styles/Product.css";

export interface productType {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

function Product({ id, title, image, price, rating }: productType) {
  const [ dispatch] = useStateValue();

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
}

export default Product;
