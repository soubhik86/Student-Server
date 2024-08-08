import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Layout/Root";
import { Home } from "./components/Home";
import {UserLogin} from "./pages/UserLogin"
import { UserRegister } from "./pages/UserRegister";
import { CreateProduct } from "./product-page/CreateProduct";
import { ProductList } from "./product-page/ProductList";
import { AuthRouter } from "./utils/Authrouter";
import { UpdateProduct } from "./product-page/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <UserLogin/>
      },
      {
        path: "/register",
        element: <UserRegister />,
      },

      {
        element: <AuthRouter />,
        children: [
          {
            path: "/create",
            element: <CreateProduct />,
          },
          {
            path: "/list",
            element: <ProductList />,
          },
          {
            path: "/update",
            element: <UpdateProduct />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
