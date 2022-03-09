import axios from "axios";

export default axios.create({
    baseURL: "https://api.fmv.medianova.xyz/api",
    headers: {
        "Content-Type" : "application/json;charset=utf-8"
    }
})