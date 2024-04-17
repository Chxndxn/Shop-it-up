import CartPage from "./pages/CartPage";
import ProductOverviewPage from "./pages/ProductOverviewPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
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
      element: <CartPage></CartPage>,
    },
    {
      path: "/checkout",
      element: <Checkout></Checkout>,
    },
    {
      path: "/product-overview/:id",
      element: <ProductOverviewPage></ProductOverviewPage>,
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
