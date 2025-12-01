import { Outlet } from "react-router";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
