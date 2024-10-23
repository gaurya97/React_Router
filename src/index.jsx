import { StrictMode,lazy ,Suspense} from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Carts";
import Error from "./Components/Error";
import Card from "./Components/Card";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// const About =lazy(()=>import("./Components/About"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
