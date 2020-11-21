import React, { Component } from "react";
import Container from "./Container";
import EmployeeDetail from "./EmployeeDetail"
import Searchbar from "./Searchbar";
import API from "../utils/API";


class EmployeeContainer extends Component {
    state = {
        result: {},
        search: ""
    }
}

export default EmployeeContainer;