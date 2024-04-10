import CartPage from "./pages/CartPage";
import ProductOverviewPage from "./pages/ProductOverviewPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      path: "/product-overview",
      element: <ProductOverviewPage></ProductOverviewPage>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
