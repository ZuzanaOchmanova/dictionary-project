import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      < div className="container">
      <header className="App-header">
        <img src="https://static.wikia.nocookie.net/the_avengers_emh__joss_whedon_series_0/images/d/d7/JARVIS_Logo.png/revision/latest?cb=20200514021931"
        alt="logo" className="logo"/>
      </header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className="App-footer">
        <small>
             This project was coded by {""}
              <a href="https://www.linkedin.com/in/zuzanaochmanova/" 
              target="_blank"
             rel="noopener noreferrer">
              Zuzana Ochmanova </a> 
             and is {""}
              <a href="https://github.com/ZuzanaOchmanova/dictionary-project"
              target="_blank"
              rel="noopener noreferrer">
               Open-sourced on GitHub.</a> 
          </small>
        </footer>
    </div>
  </div>
  );
}