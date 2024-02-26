import {createRouter,createWebHashHistory} from "vue-router"

const routes = [
    {path:"/",redirect: '/index/index'},
]

export default createRouter({
    routes,
    history:createWebHashHistory()
})