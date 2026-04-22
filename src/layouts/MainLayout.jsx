import { Outlet } from "react-router-dom";
import Header from "../components/PageHeader/Header";
import Footer from "../components/Footer";
import NavBar from "../components/PageHeader/Navbar";

function MainLayout() {
  return (
    <>
      <Header isAuthenticated={true} />
      <NavBar />
        <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;