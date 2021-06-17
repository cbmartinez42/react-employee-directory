// import axios from "axios";

export default {
    getEmployees: function(){
        const infoUrl = 'https://randomuser.me/api/?inc=name,email,phone,picture&results=25';
        return fetch(infoUrl)
        // fetch(infoUrl)
        // return axios.get("https://randomuser.me/api/?inc=name,email,phone,picture&results=25")
    }
};