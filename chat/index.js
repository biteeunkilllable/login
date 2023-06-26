let userData = JSON.parse(JSON.stringify(localStorage))
let users = new Map()
let txt
let Static = 0
let counter = 1
let session
    fetch("https://vercl-proj.vercel.app/users")// will be ultered 
    .then(res=>res.json())
    .then(res=>{
        for( i of res.Data)users.set(i.username,i.pfp)
    })
    .then(()=>{
        fetch("https://vercl-proj.vercel.app/msg")// will be altered
        .then(res=>res.json())
        .then(res=>{
            // for(i of res.Data)
        for(;Static<res.Data.length;Static++)
            txt(false,users.get(res.Data[Static].sender),res.Data[Static].sender,res.Data[Static].msg) // showning all msges
            window.location.replace(`#${counter - 1}`)
        })
    })
    .finally(()=>{
        // document.body.onload = ()=>{window.location.replace("")} 
        session = userData.pfp
        txt = function(bool,pic,user = userData.username,mess){
            if(bool)
            if(!sendTxt.value)
            return
            // if(!sendTxt.value || bool)return
            // if(bool)return
            const div = document.createElement("div")
            div.id = `${counter}`
            counter++
            div.className = "mainDev"
            const innerDiv = document.createElement("div")
            const img = document.createElement("img")
            img.src = `${pic}`
            img.width = 64
            img.height = 64
            img.style.borderRadius = "16px"
            img.alt = "profile picture"
            img.className = "img"
            innerDiv.append(img)
            const name = document.createElement("p")
            name.innerText = user
            name.className = "username"
            innerDiv.append(name)
            div.append(innerDiv)
            const msg = document.createElement("p")
            msg.innerText = mess ?mess:sendTxt.value
            msg.className = "msg"
            div.append(msg)
            document.getElementById("text").append(div)
            // console.log("touched");
        }
        btnTxt.addEventListener("click",()=>{
            if(!userData.username){
    window.location.replace("https://superchat-274e.onrender.com/")
    alert("please login")
}
            if(sendTxt.value.length){
                const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: `{"msg":"${sendTxt.value}","sender":"${userData.username}"}`
                };
                fetch('https://vercl-proj.vercel.app/newMsg', options)// will be altered
                .then(res=>res.json())
                .then(res=>{
                    // txt(true,session,userData.username)
                    window.location.replace(`#${counter - 1}`)
                    sendTxt.value = ""
                })}
            // console.log(`#${counter - 1}`);
        })

        // bool = true
    })
const btnTxt = document.getElementById("btn-text")
const sendTxt = document.getElementById("send")
let msgContrtol = setInterval(() => {
    // if(!x)
    // window.location.replace("http://127.0.0.1:5500/front-end/login/")
    fetch("https://vercl-proj.vercel.app/msg")// will be altered
.then(res=>res.json())
.then(res=>{
        if(!userData.username){
            // alert("please login")
            window.location.replace("https://superchat-274e.onrender.com")
            clearInterval(msgContrtol)
    }

    for(;Static<res.Data.length;Static++){
    txt(false,users.get(res.Data[Static].sender),res.Data[Static].sender,res.Data[Static].msg)//real time msg showing
    window.location.replace(`#${counter - 1}`)}
})
}, 100);
document.addEventListener("keypress",event=>{
    if(event.key == "Enter"){
    if(sendTxt.value.length){
        const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"msg":"${sendTxt.value}","sender":"${userData.username}"}`
        };
        fetch('https://vercl-proj.vercel.app/newMsg', options)// will be altered
        .then(res=>res.json())
        .then(res=>{
            // txt(true,session,userData.username)
            window.location.replace(`#${counter - 1}`)
            sendTxt.value = ""
        })}}
    // console.log(`#${counter - 1}`);
})