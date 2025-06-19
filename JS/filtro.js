function verHorario() {
    const fecha= document.getElementById("mi-fecha");
    const horaInicio=document.getElementById("mi-inicio");
    const horaFin=document.getElementById("mi-fin")
    const fechaActual= new Date()
    if(fecha<fechaActual){
        alert("Ingresa fechas de hoy hacia adelante. ")
    }
    
}