
var passCharStr = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-");
var ranPassLength = Math.floor(Math.random() * 120);
var newPass = []
var outPass;
var passwordButtonElem = document.getElementById("passwordbutton");
var inputBoxElem = document.getElementById("exampleInputPassword1");
var copyButtonElem = document.getElementById("copybutton");




function generatePassword () {
newPass= []
    for(var i = 0; i <= (8 + ranPassLength); i++) {
        var randomIndex = Math.floor(Math.random() * passCharStr.length);
        newPass.push(passCharStr[randomIndex]);
       
    }

    console.log("generatePassword()");
    outPass = newPass.toString()
    outPass = outPass.replace(/,/g,"")
    console.log(outPass)
    inputBoxElem.textContent = outPass;
}

passwordButtonElem.addEventListener("click", generatePassword());
// inputBoxElem.innerHTML = outPass;
// console.log(outPass.toString(newPass));

function copyClipboard () {
    let textarea = document.getElementById("exampleInputPassword1");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

copyButtonElem.addEventListener("click",copyClipboard());
