//import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Bookingeqip from './pages/Bookingeqip';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
     <Route path='/' exact Component={Home} />
     <Route path='/Login' exact Component={Login} />
     <Route path='/Register' exact Component={Register} />
     <Route path='/Bookingeqip' exact Component={Bookingeqip} />
     
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
