import React from "react";
import Table from "./components/Table"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Searchbar from "./components/Searchbar"
function App() {
  return (
    <div>
      <Header />
      <Searchbar />
       <Table />
       <Footer />
    </div>
   
  ) 
}

export default App;
