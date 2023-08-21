document.addEventListener("contextmenu", function (e) { e.preventDefault();
});
document.onkeydown = function (e) {
if (event.keyCode == 123) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt (0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode == "c".charCodeAt (0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt (0)) {
return false;
}
if (e.ctrlKey && e.shiftkey && e.keyCode == "u".charCodeAt (0)) {
return false;
}
}

const emailInput=document.getElementById("email"); 
const passwordInput=document. getElementById("password"); 
const submitButton=document.getElementById("submit");
submitButton.addEventListener("mouseover" ,(button) =>{
let email=emailInput.value;
let password=passwordInput.value;
let validate=/^([a-zA-Z0-9\._]+) @ ([a-zA-Z0-9]+) .([a-z]+)?/.test(email) && /[a-zA-Z0-9]{8}/.test(password)
if(!validate){
button.target.classList.toggle("move");
submitButton.style.background="red"
}else{
button.target.classList.add("stop");
submitButton.style.background="green"
}
})