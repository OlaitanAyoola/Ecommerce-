import React from 'react'
import './App.css';
import Navigate from "./Components/Navigation/Navigation2";
import Footer from './Components/Footer';
import LandingPage from './Pages/Landing';
function App() {


  return (
    <div className="App">
<Navigate></Navigate>
<div className='relative bg-red-600 -top-14 h-screen'>
  <LandingPage />
  <Footer></Footer>
</div>



    </div>
  );
}

export default App;
