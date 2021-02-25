getsafestatus_cgi(); //we need to update the safe status on page load


let btn = document.getElementById("cgibtn");
btn.addEventListener("click", cgi);



function cgi(){
    toggle_cgi();
}
function toggle_cgi(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "cgi-bin/togglelock.cgi", true);

    xhr.onload = function(){
        if(xhr.status == 200){
            document.getElementById("safestatus").innerHTML = `Safe Status ${xhr.responseText}`;
        }
        else if(xhr.status == 404){
            console.log("huh, looks like we couldn't find the cgi script");
        }
        else if(xhr.status == 403){
            console.log("looks like we got a 403 for the cgi script. Check your file permissions");
        }
    }

    xhr.send();
}

function getsafestatus_cgi(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "cgi-bin/getsafestatus.cgi", true);

    xhr.onload = function(){
        if(xhr.status == 200){
            document.getElementById("safestatus").innerHTML = `Safe Status ${xhr.responseText}`;
        }
        else if(xhr.status == 404){
            console.log("huh, looks like we couldn't find the cgi script");
        }
        else if(xhr.status == 403){
            console.log("looks like we got a 403 for the cgi script. Check your file permissions");
        }
    }

    xhr.send();
}
