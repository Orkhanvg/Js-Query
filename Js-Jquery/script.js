let btnLogin=document.getElementById("login")
let btnSignUp=document.getElementById("signup")
let btnBack=document.getElementById("back")
let btnSubmit=document.getElementById("submit")
let btnLogout=document.getElementById("logout")


let username=document.getElementById("username")
let password=document.getElementById("password")
let wellcome=document.getElementById("wellcome")
let remember=document.getElementById("check")
let checkbox=document.querySelector(".checkbox")
let signup=document.querySelector(".signup")
let main=document.querySelector(".main")

var c=console.log.bind(document);

if(localStorage.getItem("dbUser")==null){
    localStorage.setItem("dbUser",JSON.stringify([]))
    }

let users=JSON.parse(localStorage.getItem("dbUser"));   

loginMenu();

btnSignUp.addEventListener("click",function(){

   signupMenu(); 
    btnSubmit.addEventListener("click",function(){
        if(username.value.length>3 && password.value.length>3){
            let usernameControl=users.find(us=>us.username==username.value)
            if (usernameControl ==null) {
            let user={
                username:username.value,
                password:password.value,
                isLogin:false
            };
            
           users.push(user);
          localStorage.setItem("dbUser",JSON.stringify(users));
          alert(`User-${username.value} has been created !`)
          loginMenu();
        }
        else{
            alert(`User-${username.value} has already been registered under this name `)
        }
    }
        else{
            alert("Username & Password must have been minimum 4 characters")
        }

        })

        btnBack.addEventListener("click",function(){
            loginMenu();
        })
   
})

btnLogin.addEventListener("click",function(){

    if(users.length>0){

        let usernameControl=users.find(us=>us.username==username.value)
        let passwordControl=false;

        if(usernameControl!=null){
        username.value==usernameControl.username;
        passwordControl=usernameControl.password==password.value ?true :false;

        if(passwordControl==true){

            if(remember.checked==true){
                localStorage.setItem("username",JSON.stringify(usernameControl.username));
                localStorage.setItem("password",JSON.stringify(usernameControl.password));
            }
            if(remember.checked==false){
                localStorage.setItem("username",JSON.stringify(""));
                localStorage.setItem("password",JSON.stringify(""));
            }
            wellcomeMenu(username.value);
            
        }
        else{
            alert("password wrong")
        }

        }else{
            alert("username wrong")
        } 
   }
   else{
       alert("App doesnt have any user yet")
    }
    
})


btnLogout.addEventListener("click",function(){
    loginMenu();
})

function loginMenu(){
    main.style.display="flex";
    btnLogin.style.display="block";
    checkbox.style.display="block";
    btnBack.style.display="none";
    signup.style.display="block";
    btnSignUp.style.display="block";
    btnSubmit.style.display="none";
    wellcome.style.display="none";

    if(localStorage.getItem("username")==null){
        localStorage.setItem("username",JSON.stringify(""))
        }
    if(localStorage.getItem("password")==null){
        localStorage.setItem("password",JSON.stringify(""))
         } 
    
    if(localStorage.getItem("username")!=null){
        username.value=JSON.parse(localStorage.getItem("username"))
        password.value=JSON.parse(localStorage.getItem("password"))
    } 
}

function signupMenu(){
    main.style.display="flex";
    btnLogin.style.display="none";
    checkbox.style.display="none";
    btnBack.style.display="block";
    signup.style.display="none";
    btnSignUp.style.display="none";
    btnSubmit.style.display="block";
    wellcome.style.display="none";

    username.value=""
    password.value=""
}

function wellcomeMenu(username){
    main.style.display="none";
    wellcome.style.display="flex";
}