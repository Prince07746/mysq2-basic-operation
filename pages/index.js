

function start(){
    var name = document.getElementById('password');
    if(name.value == 2022){
        document.getElementById('demo').innerHTML = "welcome mr juuko it's always a pleasure to see you";
        document.getElementById('form').style.display = "flex";
        document.getElementById('pass').style.display = "none";
    }
    else if(name.value == 2020){
        document.getElementById('demo').innerHTML = "welcome mr samuel keep learning tomorrow will be better";
        document.getElementById('form').style.display = "flex";
        document.getElementById('pass').style.display = "none";
    }
    else if(name.value == 2023){
        document.getElementById('demo').innerHTML = "welcome mr prince can you , don't worry i'm fine and on my best performance don't over stress about me";
        document.getElementById('form').style.display = "flex";
        document.getElementById('pass').style.display = "none";
    }
    else{
        document.getElementById('demo').innerHTML = "wrong password";
    }

}
