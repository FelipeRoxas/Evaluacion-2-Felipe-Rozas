let persona = []
function validar (){
    let nNombre = eNombre.value
    let eNombre = document.getElementById("nombre")
    let eErrorNombre = document.getElementById("errorNombre")
    let nApellido = eApellido.value 
    let eApellido = document.getElementById("Apellido") 
    let eErrorApellido = document.getElementById("errorApellido")
    let nPersona = ePersona.value 
    let ePersona = document.getElementById("persona")
    
}
let p = {
    nombre:vNombre,
    apellido:vApellido,
}

persona.push(p)
console.log (persona)
eNombre.value = ""
eApellido.value = ""

function eliminar (indice){
    persona = persona.filter((p,index)=>{
        if (index != indice){
            return p
        }
    })
    cargarDatos(),
    console.log(persona)
}
function actualizarFormulario(indice){
    let eApellido = getElementById("apellido")
    let persona = personas.filter((p,index)=>{
        if(index == indice){
            return p
        }
    })
}

//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl
