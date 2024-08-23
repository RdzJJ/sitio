var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
       icon.src = "imagenes/icons/sol-linea.png";
    } else {
        icon.src = "imagenes/icons/luna-linea.png";
    }
}
