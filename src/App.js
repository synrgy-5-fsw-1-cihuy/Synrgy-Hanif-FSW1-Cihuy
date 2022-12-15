// import logo from './logo.svg';
import './App.css';
import './assets/style.css'
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Jumbotron from './components/Jumbotron';
import NavigationBar from './components/NavigationBar';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <>
    <NavigationBar />
    <Hero />
    <Service />
    <WhyUs />
    <Testimonial />
    <Jumbotron />
    <FAQ />
    <Footer />
    </>
  );
}

export default App;
