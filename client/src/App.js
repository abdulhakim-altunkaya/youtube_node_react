import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Read from './components/Read';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        
          <div>
            <span> <Link to="/read" >Read data from server</Link> </span>
            {" "}{" "}{" "}{" "}{" "}{" "}{" "}
            <span> <Link to="/" >Homepage</Link> </span>
          </div>

          <Routes>
            <Route path="/read" element={<Read /> } />
            <Route path="/" element={<Main /> } />
          </Routes>


      </div>
    </Router>

  );
}

export default App;
