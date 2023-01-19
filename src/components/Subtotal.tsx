import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../context/reducer";
import { ContextValue, useStateValue } from "../context/StateProvider";
import "../styles/Subtotal.css";

const Subtotal: React.FC<{}> = (): JSX.Element => {
  const [{ basket }] = useStateValue() as ContextValue;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;