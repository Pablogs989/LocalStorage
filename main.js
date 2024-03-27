
const btn = document.getElementById('btn')
const p = document.querySelector("p")

function leerDatos() {
    const datos = JSON.parse(localStorage.getItem('datos'));
    return datos;
}

function printDatos() {
    const datos = leerDatos();
    let texto = "";
    for (const key in datos) {
        texto = texto + (key + ": " + datos[key] + "\n");
        console.log(texto);
    }
    p.innerText = texto;
}

function onSubmit(e) {
    e.preventDefault();
    console.log('hola');
    let datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value,
    }    
    console.log(datos);
    localStorage.setItem('datos', JSON.stringify(datos));
    printDatos();
}    

btn.addEventListener('click', onSubmit);

