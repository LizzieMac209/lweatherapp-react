import "./App.css";
import Weather from "./Weather";



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Diego" />
      <footer className="mt-1">
        🪷 This website was coded by {" "}
        <a 
        href="https://www.linkedin.com/in/elizabeth-macfarlane/"
        target="_blank"
        rel="noreferrer"
        title="Lizzie Macfarlane LinkedIn"
        >
          Lizzie Macfarlane
        </a> {" "}
        and is {" "}
        <a 
        href= "https://github.com/LizzieMac209/lweatherapp-react"
        target="_blank"
        rel="noreferrer"
        title="Source code on GitHub"
        >
          <strong>open-sourced</strong>
        </a>
      </footer>
      </div>
      </div>
  );
}
 
