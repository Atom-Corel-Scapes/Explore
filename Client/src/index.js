import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import App from "./App"
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
=======
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import Main from './component/signup/Main/Main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandinPage from './component/LandingPage/LandingPage';
import Detailpage from './component/detailpage/Detailpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>} exact ></Route>
        <Route path="/Signup" element={<Main/>}></Route>
        <Route path="/LandingPage" element={<LandinPage/>}></Route>
        <Route path='/LandingPage/Detailpage' element={<Detailpage/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>
>>>>>>> 381ff121f816010acc2982b1562a136a8abf7a31
);

reportWebVitals();
