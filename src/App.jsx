import { createBrowserRouter, RouterProvider } from "react-router";
import Apout from "./Component/About/Apout";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Portoflo from "./Component/Portofolo/Portoflo";
import Layout from "./Component/Layout/Layout";
import NotFound from "./Component/NotFound/NotFound";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <Apout /> },
      { path: "/contact", element: <Contact /> },
      { path: "/Portoflo", element: <Portoflo /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
