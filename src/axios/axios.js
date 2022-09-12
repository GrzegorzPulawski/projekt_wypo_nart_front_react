import axios from "axios";

const connection = axios.create({
    baseURL: "http://localhost:8090"
});

export default connection;