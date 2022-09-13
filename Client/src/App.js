import React from "react"
import './App.css';
import NavBar from './component/NavBar';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import Signup from './component/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './component/Login';
import LandingPage1 from "./component/LandingPage1";


function App() {

  return (
    <div className="App">
      <React.StrictMode>

        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<><NavBar/><Login /></>} exact ></Route>
            
              <Route path="/signup" element={<><NavBar /><Signup /></>}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>

      </React.StrictMode>
    </div>
  );
}

export default App;

