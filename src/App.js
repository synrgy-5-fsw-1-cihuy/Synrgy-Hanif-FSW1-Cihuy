// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/style.css'
import CarsPage from './components/CarsPage';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/cars' element={<CarsPage />} />
    </Routes>
    
    <Footer />
    </>
  );
}

export default App;
