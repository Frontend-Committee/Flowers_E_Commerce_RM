import { Outlet } from "react-router-dom";
import Header from "../components/PageHeader/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import NavBar from "../components/PageHeader/Navbar";

function MainLayout() {
  return (
    <>
      <Header isAuthenticated={true} />
      <NavBar />
      <Home>
        <Outlet />
      </Home>
      <Footer />
    </>
  );
}

export default MainLayout;