let btn = document.getElementById("cgibtn");
btn.addEventListener("click", cgi);

function cgi(){
    getHello_cgi();
    console.log("we got to line 6");
}
function getHello_cgi(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "cgi-bin/main.cgi", true);

    xhr.onload = function(){
        if(xhr.status == 200){
            console.log("looks like we got the cgi script alright");
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
