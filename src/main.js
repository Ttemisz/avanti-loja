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

function realizarBusca() {
  const input = document.getElementById("inputBusca").value.trim();
  const resultado = document.getElementById("resultadoBusca");

  if (input !== "") {
    resultado.textContent = `Você buscou por: '${input}'`;
  } else {
    resultado.textContent = "";
  }
}


function realizardaBusca() {
  const input = document.getElementById("inputdaBusca").value.trim();
  const resultado = document.getElementById("resultadodaBusca");

  if (input !== "") {
    resultado.textContent = `Você buscou por: '${input}'`;
  } else {
    resultado.textContent = "";
  }
}