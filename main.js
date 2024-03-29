let menu = document.getElementById("menu")
let wrong = document.getElementById("wrong")
menu.addEventListener("click" , function(){
    var element = document.getElementById('bars');
    if (window.innerWidth <= 991){
        element.style.display = 'block';
        menu.style.display = "none"
        wrong.style.display = "block"
    }
})
wrong.addEventListener("click" , function(){
    var element = document.getElementById('bars');
    if (window.innerWidth <= 991){
        element.style.display = 'none';
        menu.style.display = "block"
        wrong.style.display = "none"
    }
})
