var NavTodasCategorias = document.getElementById("MenuTodasCategorias");

var NavMenuDepartamento = document.getElementById("MenuDepartamento");

function AbrirNavTodasCategorias() {

  NavMenuDepartamento.style.display = "none";
    
    if (NavTodasCategorias.style.display === "flex") {
      NavTodasCategorias.style.display = "none";

      } else {
        NavTodasCategorias.style.display = "flex";
      }
}

function AbrirNavDepartamento() {
  
  NavTodasCategorias.style.display = "none";
  
  if (NavMenuDepartamento.style.display === "flex") {
    NavMenuDepartamento.style.display = "none";
    } else {
      NavMenuDepartamento.style.display = "flex";
    }
}