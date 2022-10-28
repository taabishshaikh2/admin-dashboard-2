import axios from 'axios';



const instance = axios.create({
    baseURL: "http://13.127.233.228:3000/api/v1/",
})




export default instance;