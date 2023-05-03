import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { useState } from "react";
import Home from "./pages/home/Home";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogState() {
    setIsLoggedIn(true)
  }

  
  

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact to path="/account/login" element={isLoggedIn ? <Home isLoggedIn={isLoggedIn}/> : <Login change = {handleLogState} isLoggedIn={isLoggedIn} /> }>
          </Route>
          <Route exact to path="/" element={isLoggedIn ? <Home isLoggedIn={isLoggedIn}/> : <Login change = {handleLogState} isLoggedIn={isLoggedIn} />} >
          </Route>
          
          
        </Routes>

      </Router>

    </div>
  );
}

export default App;
