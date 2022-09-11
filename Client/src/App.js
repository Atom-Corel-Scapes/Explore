
import './App.css';

import Login from './component/Login';
import NavBar from './component/NavBar';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';


function App() {
  <div>
    <NavBar />

  </div>




  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Login />
      </Provider>
    </div>
  );
}

export default App;
