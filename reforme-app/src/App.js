import React from "react";
import './App.scss';
import Header from './components/Header/Header';
import FrontPage from './pages/FrontPage';
import Footer from "./components/Footer/Footer";
import { ModalProvider } from "./utilities/ModalContext";
import Contacts from "./pages/Contacts";
import Page404 from "./pages/404";
import ServicesPage from "./pages/ServicesPage";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AnimatedRoutes from "./utilities/AnimatedRoutes";
import ServicePage from "./pages/ServicePage";
import ServicePageEndo from "./pages/ServicePageEndo";
import ServicePageLymph from "./pages/ServicePageLymph";
import ServicePageLiashi from "./pages/ServicePageLiashi";
import ServicePageOxygen from "./pages/ServicePageOxygen";
import ServicePageRed from "./pages/ServicePageRed";
import ServicePageIV from "./pages/ServicePageIV";
import EmSellaPage from "./pages/EmSellaPage";
import MenuPage from "./pages/MenuPage";
import ServicePageBio from "./pages/ServicePageBio";
import ModalBanner from "./components/ModalBanner/ModalBanner";


function App() {

  return (
    <ModalProvider>
      <Router>
        <Header />
        <main>
          <AnimatedRoutes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/endospheres" element={<ServicePageEndo />} />
            <Route path="/lymphatic-compression" element={<ServicePageLymph />} />
            <Route path="/iyashi-dôme-japanese-sauna" element={<ServicePageLiashi />} />
            <Route path="/hyperbaric-oxygen-chamber" element={<ServicePageOxygen />} />
            <Route path="/red-light-therapy-led-collagen-bed" element={<ServicePageRed />} />
            <Route path="/the-btl-emsella-chair" element={<EmSellaPage />} />
            <Route path="/iv-therapy" element={<ServicePageIV />} />
            <Route path="/biologique-recherche" element={<ServicePageBio />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Page404 />} />
          </AnimatedRoutes>
        </main >
        <ModalBanner />
        <Footer />
      </Router>
    </ModalProvider >
  );

}

export default App;
