import { Fragment } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { ProductType } from "./Product";
import Subtotal from "./Subtotal";
import { ContextValue, useStateValue } from "../context/StateProvider";
import "../styles/Checkout.css";

const Checkout: React.FC<{}> = (): JSX.Element => {
  const [{ basket, user }] = useStateValue() as ContextValue;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          {basket.length !== 0 ? (
            <h2 className="checkout__title">Your shopping Basket</h2>
          ) : (
            <>
              <h2 className="checkout__title">
                Your shopping Basket is empty.
              </h2>
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item.
              </p>
            </>
          )}

          {basket.map((item: ProductType, i: number) => (
            <Fragment key={i}>
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </Fragment>
          ))}
        </div>
      </div>

      <div className="checkout__right">{<Subtotal />}</div>
    </div>
  );
};

export default Checkout;
