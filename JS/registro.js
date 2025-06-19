
function registrarUsuario() {
    const name= document.getElementById("mi-name").value;
    const email= document.getElementById("mi-email").value;
    const psw= document.getElementById("mi-psw").value;
    let usuario ={
        name:name,
        email:email,
        psw:psw
    }
    localStorage.setItem("usuarios",JSON.stringify(usuario));
    //localStorage.setItem();
}
