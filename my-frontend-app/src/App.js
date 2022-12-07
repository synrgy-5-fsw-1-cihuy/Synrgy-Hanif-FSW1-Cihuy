import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import FAQ from './faq/FAQ';

function App() {
  const person = {
    name: "Roger"
  };
  
  return (
    
    <div className="App">
      <Header />
      <Content 
      name="Zaki"
      person={person}
      />
      <FAQ />
      <Footer />
      <header className="App-header">
      
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
      </header>
    </div>
  );
}

export default App;
