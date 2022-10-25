import React, {useEffect, Suspense} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";
import 'animate.css';
import Header from './components/Header/Header';
import Home from "./components/Pages/Home";
import LoadingOverlay from './components/LoadingOverylay/LoadingOverlay';
import AOS from 'aos';
import 'aos/dist/aos.css';


const NearEarthAsteroids = React.lazy(() => import('./components/Pages/NearEarthAsteroids'));
const AsteroidSearch = React.lazy(() => import('./components/Pages/AsteroidSearch'));
const EPIC = React.lazy(() => import('./components/Pages/EPIC'));
const Asteroid = React.lazy(() => import('./components/Pages/Asteroid'));
const Error = React.lazy(() => import('./components/Pages/Error'));

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <Suspense fallback={<LoadingOverlay enabled={true} bgColor={"#494949"} spinnerColor={"#4fa94d"}/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/near-earth-objects" element={<NearEarthAsteroids />} />
        <Route path="/asteroid-search" element={<AsteroidSearch />} />
        <Route path="/asteroid/:id" element={<Asteroid />} />
        <Route path="/asteroid" element={<Navigate to="/asteroid-search" replace={true} />} />
        <Route path="/epic" element={<EPIC />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
