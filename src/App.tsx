import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useStateValue, ContextValue } from "./context/StateProvider";
import "./styles/App.css";

const App:React.FC<{}>=() =>{
  const [, dispatch] = useStateValue() as ContextValue;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      authUser
        ? dispatch({ type: "SET_USER", user: authUser })
        : dispatch({ type: "SET_USER", user: null });
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
