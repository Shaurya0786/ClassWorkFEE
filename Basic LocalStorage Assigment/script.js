document.querySelector("textarea").value = localStorage.getItem(0)
let savedata = document.querySelector("#save")
savedata.addEventListener("click",()=>{
    let data = document.querySelector("textarea").value
    localStorage.setItem(0,data);
    alert("Your Data Has Been Stored In LocalStorage You Can Reload Now")
})
let clearbtn = document.querySelector("#clear")
clearbtn.addEventListener("click",()=>{
    document.querySelector("textarea").value=""
    let data = document.querySelector("textarea").value
    localStorage.setItem(0,data);
    alert("Your Data Has Been Cleared From LocalStorage")
})