import React from "react";
import EmployeeContainer from "./components/EmployeeContainer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
// import Wrapper from "./components/Wrapper";
function App() {
  return (
    <div>
       <Wrapper>
       <Navbar />
       <EmployeeContainer />
       </Wrapper>
    </div>
   
  ) 
}

export default App;
