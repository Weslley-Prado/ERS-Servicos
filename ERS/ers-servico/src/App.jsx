import './App.css';
import Navbar from './components/menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Routes from './Routes';
import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
                          

      </div>
    </BrowserRouter>

  );
}

export default App;
