function AbrirHamburguer() {
    var Departamento = document.getElementById("Departamentos");

    if (Departamento.style.display === "flex") {
        Departamento.style.display = "none";
      } else {
        Departamento.style.display = "flex";
      }
}