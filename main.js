
const btn = document.getElementById('btn')
const btnRemove = document.getElementById('btnRemove')
const p = document.querySelector("p")
let datosArray = [];

function leerDatos() {
    const datos = JSON.parse(localStorage.getItem('datos'));
    console.log(datos);
    return datos;
}

function escribirDatos() {
    let datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value,
    }
    console.log(datos);
    if (datos.nombre === "" || datos.nombre === null) {
        return alert("Escribe un nombre")
    }
    if (datos.correo === "" || datos.correo === null) {
        return alert("Escribe un correo")
    }
    if (datos.mensaje === "" || datos.mensaje === null) {
        return alert("Escribe un mensaje")
    }
    datosArray.push(datos);
    localStorage.setItem("datos", JSON.stringify(datosArray));
}

function printDatos() {
    const datos = leerDatos();
    let texto = "";
    let i = 0;
    if (datos != null) {
        datos.forEach(dato => {
            for (const key in dato) {
                texto = texto + (key + ": " + dato[key] + "\n");
                console.log(texto);
            }
            texto = texto + "\n";
            i++;
        }); 
    }
    
    p.innerText = texto;
}

function remove(e) {
    e.preventDefault();
    localStorage.removeItem('datos');
    datosArray = [];
    printDatos();
}

function onSubmit(e) {
    e.preventDefault();
    escribirDatos();
    printDatos();
}

printDatos();
btn.addEventListener('click', onSubmit);
btnRemove.addEventListener('click', remove);
