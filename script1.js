let datos = [];

function validar(){
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();

    let errorNombre = document.getElementById("errorNombre");
    let errorEmail = document.getElementById("errorEmail");

    let valido = true;

    let soloLetras = /^[a-zA-Z]+$/;
    if (nombre === "") {
        errorNombre.textContent = "El nombre no puede estar vacio.";
        valido = false;
    } else if (!soloLetras.test(nombre)){
        errorNombre.textContent = "el nombre solo debe contener letras.";
        valido = false;
    }

    let correoValido = /^[^@]+@[^@]+\.(cl)$/;
    if (email === ""){
        errorEmail.textContent = "El correo no puede estar vacio.";
        valido = false;
    }else if (!correoValido.test(email)) {
        errorEmail.textContent = "El correo debe tener un solo @ y terminar con .cl";
        valido = false;
    }

    if (valido) {
        let persona = {
            nombre: nombre,
            email: email
        };
        datos.push(persona);
        mostrarTabla();
        limpiarFormulario();
    }
}

function mostrarTabla(){
    let cuerpo = document.getElementById("cuerpoTabla");
    cuerpo.innerHTML = "";

    datos.forEach((item, i) => {
        let fila = `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.email}</td>
                <td>
                    <button onclick="editar(${i})">editar</button>
                    <button onclick="eliminar(${i})">eliminar</button>
                </td>
            </tr>
            `;
            cuerpo.innerHTML += fila;
    });
}

function eliminar(index){
    if (confirm("¿Estas seguro que deseas eliminar este registro")) {
        datos.splice(index, 1);
        mostrarTabla();
    }
}

function editar(index) {
    let persona = datos[index];
    document.getElementById("nombre").value = persona.nombre;
    document.getElementById("email").value = persona.email;
    datos.splice(index, 1);
    mostrarTabla();
}

function limpiarFormulario(){
    document.getElementById("miFormulario").reset();
}
//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl
