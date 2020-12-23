let isMenuActive = false

document.querySelector("#btmenu").addEventListener("click", function(){
    console.log("click");

// if (isMenuActive == false){
//     console.log("off");
//     document.querySelector("#navMain").style.display = "block";
//     isMenuActive = true;
// }
// else {
//     console.log("on");
//     document.querySelector("#navMain").style.display = "none";
//     isMenuActive = false;
// }


document.querySelector("#navMain").classList.toggle("show")

document.querySelector("#modeDark").addEventListener("click", function(){
    console.log("click");
    const codeSecret = 56785;
    window.prompt("Mot de passe svp ?");
    if (secret !== codeSecret) {
        window.location = "https://mesgoodies.net/21924-thickbox_default/shirt-mickey-double-fuck-blanc-pour-homme-et-femme.jpg"
    } else {
        document.querySelector(".messageSecret-js").classList.toggle("show");
    }
})

})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }