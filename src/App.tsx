import {Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './components/Header/Header';
import Home from "./components/Pages/Home";
import NearEarthAsteroids from './components/Pages/NearEarthAsteroids';
import AsteroidSearch from './components/Pages/AsteroidSearch';
import EPIC from './components/Pages/EPIC';
import Asteroid from './components/Pages/Asteroid';
import Error from './components/Pages/Error';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/near-earth-objects" element={<NearEarthAsteroids />} />
        <Route path="/asteroid-serach" element={<AsteroidSearch />} />
        <Route path="/asteroid/:id" element={<Asteroid />} />
        <Route path="/epic" element={<EPIC />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
