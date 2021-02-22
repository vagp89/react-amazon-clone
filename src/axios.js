import axios from "axios";

const instace = axios.create({
  baseURL: 'http://localhost:5001/clone-e9537/us-central1/api' // The API (cloud fuction) URL
  })

export default instace;
