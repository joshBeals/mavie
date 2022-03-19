import axios from "axios";

export default axios.create({
    baseURL: 'https://mavieapp.herokuapp.com/api'
});