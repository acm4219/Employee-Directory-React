import React, { Component } from "react";
import API from "../utils/API";

class getEmployeeData extends Component {
  state = {
      employees: [{}],
      filteredEmployees: [{}]
  }

    componentDidMount() {
        this.employeeRender();
    }

    employeeRender = () => {
        API.getEmployee().then(res => this.setState({
            employees: res.data.message
        })
        ).catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <h3>
                   
                </h3>
            </div>
        )
    }
}

export default getEmployeeData;