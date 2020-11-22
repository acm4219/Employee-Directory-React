import React, { Component } from "react";
import API from "../utils/API";
import Container from "./Container";
import EmployeeDetail from "./EmployeeDetail"
import Searchbar from "./Searchbar";



class EmployeeContainer extends Component {
    state = {
        employee: [{}],
        result: [{}],
        search: "",
        error: ""
    };
    
    componentDidMount(){
     this.loadEmployee();
    }

    loadEmployee = () => {
        API.getEmployee().then(res => this.setState({ employee: res.data.message})).catch(err => console.log(err));
    } 

    searchEmployees = query => {
        API.getEmployee(query).then(res => this.setState({ result: res.data })).catch(err => console.log(err));
    };

    handleInputChange = event => {
       this.setState({ search: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployee(this.state.search).then(res => {
            if (res.data.status === "error"){
                throw new Error(res.data.message);
            }
            this.setState({ result: res.data.message, error: "" }).catch(err => this.setState({error: err.message}));
        });
    };

    render(){
        return(
            <Container>
                <Searchbar 
                 value={this.state.search}
                 handleInputChange={this.handleInputChange}
                 handleFormSubmit={this.handleFormSubmit}/>

                <EmployeeDetail 
                employee={this.state.employee}

                />               
            </Container>
        )
    }
}

export default EmployeeContainer;