import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      < div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid"
        alt="logo"/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
             This project was coded by {""}
              <a href="https://www.linkedin.com/in/zuzanaochmanova/" 
              target="_blank"
             rel="noopener noreferrer">
              Zuzana Ochmanova </a> 
             and is {""}
              <a href="https://github.com/ZuzanaOchmanova/dictionary-app"
              target="_blank"
              rel="noopener noreferrer">
               Open-sourced on GitHub.</a> 
          </small>
        </footer>
    </div>
  </div>
  );
}