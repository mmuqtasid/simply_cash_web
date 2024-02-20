import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/main/Header';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Cashier from './components/pages/Cashier'
import Errror from './components/main/Errror';
import Edit from './components/pages/Edit';
import {Routes,Route} from "react-router-dom";
import "./App.css"
import Setting from './components/pages/Setting';
import Navbar from './components/navbar/Navbar';
import HomeMain from './components/homemain/HomeMain';
import Inventory from './components/homemain/inventory/Inventory';
import ChatGPT from './components/ChatGPT/ChatGPT';

function App() {
  return (
  <>
   <Navbar />
   <Header/>
    <Routes>
    <Route path='/HomeMain' element={<HomeMain />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Cashier' element={<Cashier/>} />
      <Route path='/ChatGPT' element ={<ChatGPT/>} />
      <Route path='/Edit' element={<Edit/>} />
      <Route path='/Setting' element={<Setting/>} />
      <Route path='/Inventory' element={<Inventory/>} />
      <Route path='*' element={<Errror />} />
      
    </Routes>
  </>
  );
}

export default App;
