import axios from "axios"


const baseURL = process.env.NODE_ENV =="production"?"":""

const instance = axios.create({
    baseURL,
    timeout:100000,
})

instance.interceptors.request.use((config)=>{
    return config
},(error)=>{
    console.log(error);
    return Promise.reject(error);
})


instance.interceptors.response.use((response)=>{

},(error)=>{
    console.log(error);
    return Promise.reject(error);
})

export default instance