import "./App.css";
import Home from "./pages/Home";
import { UsersDataContext } from "./context/UsersDataContext";
import "../src/assets/styles.css";

function App() {
  return (
    <UsersDataContext>
      <div className="App">
        <Home />
      </div>
    </UsersDataContext>
  );
}

export default App;
