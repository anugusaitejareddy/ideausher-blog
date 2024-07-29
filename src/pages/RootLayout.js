import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
