import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/Header";
import Generate from "./mbi/Generate";
import Verify from "./mbi/Verify";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <Generate />
            </div>
            <div className="col">
              <Verify />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
