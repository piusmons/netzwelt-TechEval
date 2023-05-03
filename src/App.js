import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogState() {
    setIsLoggedIn((current) => !current)
    console.log(isLoggedIn)
  }


  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact to path="/" element={<Login isLoggedIn={isLoggedIn}/>}>
          </Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
