import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./containers/Navbar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
