let email = document.getElementById("input#email");
let contraseña = document.getElementById("input#contraseña");

function entrar() {
  let email = document.querySelector("input#email");
  let contraseña = document.querySelector("input#contraseña");

  if (email.value == "") {
    alert("Informacion erronea!");
    email.focus();
    return;
  }
  if (contraseña.value == "") {
    alert("Favor, verifique su contraseña!");
    contraseña.focus();
    return;
  }
  alert("Bienvenido!");
}
