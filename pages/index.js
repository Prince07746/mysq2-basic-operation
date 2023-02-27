

function start(){
    var name = document.getElementById('password');
    if(name.value == 2022){
        document.getElementById('demo').innerHTML = "welcome";
        document.getElementById('form').style.display = "flex";
        document.getElementById('pass').style.display = "none";

    }else{
        document.getElementById('demo').innerHTML = "wrong password";
    }
}