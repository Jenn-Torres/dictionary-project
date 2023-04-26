import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="universe" />
        </main>
        <footer className="App-footer"> Coded with love for 
        <a href="https://www.shecodes.io/graduates/57892-jennifer-torres" 
           target="_blank"
           rel="noreferrer"> Jennifer Torres </a> and is open sourced on{" "}
           <a
             href="https://github.com/Jenn-Torres/dictionary-project"
             target="_blank"
             rel="noreferrer"
           >
             GitHub.
           </a> 
        </footer>
      </div>
    </div>
  );
}
