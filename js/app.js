var button = document.getElementById("btn");

function showMenu(){
  var menu = document.getElementById("opcs-menu");

  if(menu.classList.contains("disabled-menu")){
    menu.classList.remove("disabled-menu");
    menu.classList.add("enabled-menu");
  }else{
    menu.classList.remove("enabled-menu");
    menu.classList.add("disabled-menu");
  }
}

button.addEventListener("click", showMenu);
