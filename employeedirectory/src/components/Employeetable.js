import React from "react";
import { Table } from "react-bootstrap"

function Employeetable() {
    return(
      <div>
      <br />
            <Table striped bordered hover>
                <thead>
                    <tr>  
                      <th>Picture</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>I.D.</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table> 
       </div>
     )
}

export default Employeetable;