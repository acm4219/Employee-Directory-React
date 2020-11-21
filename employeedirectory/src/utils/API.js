import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20";
const APIKEY = "&?inc=picture,name,id,phone,email,dob";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY)
    }
};