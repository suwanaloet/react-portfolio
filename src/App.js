import React, { useState } from "react";
import Header from "./components/Header";
// import Nav from "./components/Navigation";
//moved to header
import Footer from "./components/Footer";

//import Sections from "./components/Pages/index";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Project from "./components/Project";

//mostly follow format from photo-port
//make sure most of each component is in respective pages. 

//currently working: header, footer
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
    <div>
      <div>
        <Header>

        </Header>
      </div>
      <div>
        <Footer>

        </Footer>
      </div>
      <div id="bottom">
          
      </div>

    </div>
  );  
}

export default App;
