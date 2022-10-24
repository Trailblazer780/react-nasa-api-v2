import {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";
import 'animate.css';
import Header from './components/Header/Header';
import Home from "./components/Pages/Home";
import NearEarthAsteroids from './components/Pages/NearEarthAsteroids';
import AsteroidSearch from './components/Pages/AsteroidSearch';
import EPIC from './components/Pages/EPIC';
import Asteroid from './components/Pages/Asteroid';
import Error from './components/Pages/Error';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/near-earth-objects" element={<NearEarthAsteroids />} />
        <Route path="/asteroid-search" element={<AsteroidSearch />} />
        <Route path="/asteroid/:id" element={<Asteroid />} />
        <Route path="/asteroid" element={<Navigate to="/asteroid-search" replace={true} />} />
        <Route path="/epic" element={<EPIC />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
