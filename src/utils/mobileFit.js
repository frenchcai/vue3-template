
function fitMobileWidth(){
    const width = 750;
    const scale = window.innerWidth/width

    let meta = document.querySelector("meta[name=viewport]")
    let conetent = `width=${width}, initial-scale=${scale}, user-scalable=no`
    if(!meta){
        meta = document.createElement("meta")
        meta.setAttribute('name',"viewport")
        document.head.appendChild(meta)
    }
    meta.setAttribute("content",conetent)
}

function install(Vue,options){
    if(install.installed) return;
    install.installed = true;
    fitMobileWidth();
}

export default {
    install
}