function ingresar() {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const email= document.getElementById("mi-email");
    const psw= document.getElementById("mi-psw");

    if(usuarios.email==email && usuarios.psw==psw){
        const login= document.getElementById("contenedor-login");
        login.style.display="none";
        const dashboard= document.getElementById("contenedor-horario");
        dashboard.style.display="block";
    }
}

function Validardatos(form) {
    const formulario = document.getElementById("formulario-login");
}