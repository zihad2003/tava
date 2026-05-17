import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { DataProvider } from "./context/DataContext";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"     element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/*" element={<AppLayout />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}
