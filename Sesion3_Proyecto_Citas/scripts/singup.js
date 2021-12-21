let usuarios =JSON.parse(localStorage.getItem('Usuarios')) || []


/* //////////////////////////////////////////////////////////////////////////////////////////*/
/*                               FORMULARIO DE REGISTRO
/*//////////////////////////////////////////////////////////////////////////////////////////*/
let formulario_regis = document.getElementById('form_2')

const capturarDatos_regis =() =>{
    let name_usuario = document.getElementById('name').value
    let apellido = document.getElementById('apellido').value
    let correo = document.getElementById('correo').value
    let contraseña = document.getElementById('contraseña').value


    let registro_usuarios ={
        name_usuario,
        apellido,
        correo,
        contraseña
    }

    usuarios.unshift(registro_usuarios)
    //Guardar informarción en Almacenamiento Local
    localStorage.setItem('Usuarios', JSON.stringify(usuarios))
}


formulario_regis.addEventListener('submit' , e => {
    e.preventDefault()
    capturarDatos_regis()
    /*Limpia los inputs que se han escrito en el formulario al
    darle "submit"*/
    e.target.reset()
    window.location.href ="./login.html";
})
