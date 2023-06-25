const switsh = document.getElementById("switch")
const loginn = document.getElementById("loginn")
const btn = document.getElementById("loginop")
const btn1 = document.getElementById("signop")
const txtUser = document.getElementById("login-username")
const txtpass = document.getElementById("login-password")
const btn2 = document.getElementById("Sign-up")
let bool = true
function onoff(){

//    switsh.style.backgroundColor = "black"
    if(bool){
    switsh.style.animationName = "switching-on"
    btn.style.animationName = "right"
    btn1.style.animationName = "left"
    bool = !bool
    document.getElementById("forgot")
    document.getElementById("forgot").style.visibility = "hidden"
    txtUser.disabled = true
    txtpass.disabled = true
    btn2.disabled = false
    document.getElementById("btnLogin").disabled = true
    document.getElementById("sign-username").disabled = false
    document.getElementById("sign-password").disabled = false
    document.getElementById("sign-conform-password").disabled = false
    return
}
    btn2.disabled = true
    document.getElementById("sign-username").disabled = true
    document.getElementById("sign-password").disabled = true
    document.getElementById("sign-conform-password").disabled = true
    document.getElementById("btnLogin").disabled = false
    txtUser.disabled = false
    txtpass.disabled = false
    document.getElementById("forgot").style.visibility = "visible"
    bool = !bool
    switsh.style.animationName = "switching-off"
    btn.style.animationName = "left"
    btn1.style.animationName = "right"
}
loginn.onclick = ()=>{
    onoff()
    document.getElementById("sign-username").value = ""
    document.getElementById("sign-password").value = ""
    document.getElementById("sign-conform-password").value = ""
}
document.getElementById("sign").onclick = ()=>{
    onoff()
    txtUser.value = ""
    txtpass.value = ""
}
document.getElementById("btnLogin").onclick = ()=>{
const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: `{"username":"${txtUser.value}","password":"${txtpass.value}"}`
    };
    fetch('https://vercl-proj.vercel.app/check', options)
    .then(response => response.json())
    .then(response =>{
        // console.log(response);
        // console.log("obj len =>",response.length);
        if(response.msg == "not successfull :/")
        return
        document.getElementById("login").style.animationName = "loginn"
        document.getElementById("loadingCenter").style.animationName = "loading"
        document.getElementById("borders-border").style.animationName = "border-loading"
        document.getElementById("border").style.visibility = "visible"
        //document.getElementById("border").style.animationName = "border-loginn"
        setTimeout(() => {
            document.getElementById("lbl").style.animationName = "movedown"
        }, 1000);
        setTimeout(() => {
            window.location.href = "chat/index.html"
        }, 5000);
        // cats are cute
        let us = response.username;
        let pf = response.pfp;
        const options2 = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: `{"username":"${us}","pfp":"${pf}"}`
        };
        localStorage.setItem("username",us)
        localStorage.setItem("pfp",pf)
        // console.log(localStorage);
    })
    .catch(err => console.error(err));
}
btn2.onclick = ()=>{
    let user = document.getElementById("sign-username").value
    let pass = document.getElementById("sign-password").value
    let conpass = document.getElementById("sign-conform-password").value
    if( user.length <= 4 || pass.length <= 4) {alert("minimum of 4 characters each");return}
    if(pass != conpass){alert("the password and confirmation doesn't match");return}
const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: `{"username":"${user}","password":"${pass}","pfp":"https://api.dicebear.com/6.x/lorelei-neutral/svg?seed=${user+prompt("tell me somthing about you").replace(" ","-")}"}`
    };
    fetch('https://vercl-proj.vercel.app/add', options)
    .finally(()=>alert("new account has been made"))
}
localStorage.setItem("logged",true)