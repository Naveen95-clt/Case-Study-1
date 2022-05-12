function populate(){

    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4&&xhr.status==200){
            var resultData=JSON.parse(xhr.responseText);
            
            fill(resultData);
        }
    }
    xhr.open("get","https://jsonplaceholder.typicode.com/todos")
    xhr.send();

    function fill(x){
        var htmlData="";
        for(i=0;i<x.length;i++){
            if(x[i].completed==true){
                htmlData=htmlData+"<tr><td>"+x[i].id+"</td><td>"+x[i].title+"</td><td><input type=checkbox checked disabled ></td></tr>";
            }
            else{
                htmlData=htmlData+"<tr><td>"+x[i].id+"</td><td>"+x[i].title+"</td><td><input class=check type=checkbox  ></td></tr>";
            }
        }
        document.getElementById("resultArea").innerHTML=htmlData;
        count();
    }

}

function count(){
    var checkBox=document.getElementsByClassName("check");
console.log(checkBox.length)
count=0;
for(i=0;i<checkBox.length;i++){
    checkBox[i].addEventListener('change',function(){
        if(this.checked){
            count++;
            console.log(count)
            checkCounter();
        }
        else{
            count--;
            console.log(count)
        }
    })
}
}

function checkCounter(){
    let promise=new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats,you have completed 5 tasks successfully")
        }
    })
    promise.then(function(s){
        console.log('ok')
        alert(s);
    })
}

function logout(){
    window.open("index.html","_self")
}






