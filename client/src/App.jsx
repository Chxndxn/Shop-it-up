import CartPage from "./pages/CartPage";
import ProductOverviewPage from "./pages/ProductOverviewPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import Protected from "./features/auth/component/Protected";
import { useEffect } from "react";
import { fetchItemsByUserId } from "./features/cart/cartSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>,
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>,
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>,
      </Protected>
    ),
  },
  {
    path: "/product-overview/:id",
    element: (
      <Protected>
        <ProductOverviewPage></ProductOverviewPage>,
      </Protected>
    ),
  },
]);

function App() {
  const disptach = useDispatch();
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  useEffect(() => {
    const user = JSON.parse(loggedInUser);
    if (user) {
      disptach(fetchItemsByUserId(user.id));
    }
  }, [disptach, loggedInUser]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function AppWrapper() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

export default AppWrapper;
