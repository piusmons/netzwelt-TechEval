import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { useState } from "react";

function App() {
  const [authUser, setAuthUser] = useState(null);



  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact to path="/" element={<Login/>}>
          </Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
