import {defineStore} from "pinia";
import { ref } from "vue";
const env = process.env.NODE_ENV =="production"?"production":"development"
export const userStore = defineStore("user",()=>{
    const userInfo = ref({
        phone:""
    })

    if(getUserInfo()){
        userInfo.value = getUserInfo()
    }

    function setUserInfo(info){
        userInfo.value = {...userInfo.value,...info}
        localStorage.setItem(`${env}member-union-userInfo`,JSON.stringify(userInfo.value))
    }

    function getUserInfo(){
        const info =  localStorage.getItem(`${env}member-union-userInfo`)||"{}"
        return JSON.parse(info)
    }   

    function clearUserInfo(){
        localStorage.removeItem("userInfo")
        userInfo.value = {}
    }

    return {
        userInfo,
        setUserInfo,
        getUserInfo,
        clearUserInfo
    }
})