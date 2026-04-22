import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Occasions from "./pages/Occasions";
import Contact from "./pages/Contact";
import About from "./pages/About";

const router = createBrowserRouter([
  {path: "/", element: <MainLayout />, children: [
      {index: true, element: <Home />},
      {path: "products", element: <Products />},
      {path: "categories", element: <Categories />},
      {path: "occasions", element: <Occasions />},
      {path: "contact", element: <Contact />},
	  {path: "about", element: <About />},
    ]},
]);

const App = () => {
	return (
	<>
		<RouterProvider router={router} />
	</>
	);
};

export default App;
