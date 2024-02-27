import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Register from './components/pages/Register';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
