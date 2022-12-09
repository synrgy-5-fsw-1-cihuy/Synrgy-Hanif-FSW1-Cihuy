// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Profile from './components/profile/Profile';
import FAQ from './faq/FAQ';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import User from './components/user/User';

function App() {
  const person = {
    name: "Roger"
  };

  const [page, setPage] = useState();

  return (
    
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPage("")} href={`http://localhost:3000/${page}`}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage("contact")} href={`http://localhost:3000/${page}`}>Contact</Nav.Link>
            <Nav.Link onClick={() => setPage("about")} href={`http://localhost:3000/${page}`}>About</Nav.Link>
            <Nav.Link onClick={() => setPage("profile")} href={`http://localhost:3000/${page}`}>Profile</Nav.Link>
            <Nav.Link onClick={() => setPage("user")} href={`http://localhost:3000/${page}`}>User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Router>
        <Routes>
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/user' element={<User />} />
        </Routes>
      </Router>

      <Header />
      <Content 
      name="Zaki"
      person={person}
      />
      <FAQ />
      <Footer />

      {/* <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
