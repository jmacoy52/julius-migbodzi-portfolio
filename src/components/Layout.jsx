﻿import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import StickyHeading from "./StickyHeading";
import "../styles/layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <StickyHeading />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}


export default Layout;

