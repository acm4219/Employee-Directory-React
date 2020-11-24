import React from 'react';

function EmployeeTable(props) {
    return (
        <div>
        <div className="text-center">
        <table>
            <thead>
            <tr>
             <th>Id Picture</th>
            <th>Name: </th>
             <th>Id: </th>
             <th>Phone: </th>
            <th>Email: </th>
            <th>Date of Birth: </th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><img alt={props.name} className="img-fluid" src={props.picture} style={{ margin: "0 auto"}} /></td>
            <td>{props.name}</td>
            <td>{props.id}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td> 
            </tr> 
            </tbody>
            </table>     
            </div>
        </div>
    )
}

export default EmployeeTable;