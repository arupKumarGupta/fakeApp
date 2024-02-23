import Home from "./features/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./routes/Navbar";
import { Outlet, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { RenderRoutes } from "./routes/RenderRoutes";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <RenderRoutes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
