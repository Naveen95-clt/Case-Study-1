let button = document.getElementById('button')
 
let name,password,message
 
button.addEventListener('click',() => {
  
    name = document.getElementById('name').value
 
    password = document.getElementById('password').value
 
    let message = (alertmessage) => {
        alert(alertmessage)
    }
 
    validateform(name,password,message)
 
 
})
 
let validateform = (name,password,callback) => {
    if(name == "username" && password == 12345){
        window.open("index2.html","_self")
    }
    else{
        callback("Form is not validated")
    }
}