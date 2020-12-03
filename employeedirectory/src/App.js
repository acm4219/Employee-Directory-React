import React from "react";
import Employeetable from "./components/Employeetable"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Searchbar from "./components/Searchbar"

function App() {
  return (
    <div>
      <Header />
      <Searchbar />
       <Employeetable />
       <Footer />
    </div>
   
  ) 
}

export default App;
