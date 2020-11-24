import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
// import Wrapper from "./components/Wrapper";
function App() {
  return (
    <div>
       <Header />
       <div>
         <Nav />
         <SearchBar />
         <EmployeeTable />
       </div>
       <Footer />
    </div>
   
  ) 
}

export default App;
