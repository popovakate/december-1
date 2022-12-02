import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by Kate Popova and is{" "}
          <a href="https://github.com/popovakate/december-1">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
