import './App.css';
import Nav from './components/Nav';
import Section from './components/Section';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'



function App() {

   const [message, setMessage] = useState('')


  return (

        <div>    
              <div className="App">
                  <Nav />
                  <Section message={message} setMessage={setMessage}/>
                  <Header message={message}/>
                  <Footer />
                  

              </div>  



        </div>

      
  );
}



export default App;
