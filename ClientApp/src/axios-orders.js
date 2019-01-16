import axios from 'axios';

const instance = axios.create({
    baseURL: "https://websage-mph.firebaseio.com/",

});

export default instance;

// How to POST:
// import axios as axios in file from which post request should be sent,
// use 'axios.post("/stories/<uniqueTitleOrID>.json")'