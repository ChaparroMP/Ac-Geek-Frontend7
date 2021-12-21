/* //////////////////////////////////////////////////////////////////////////////////////////*/
/*                               FORMULARIO DE INICIAR SESIÓN
/*//////////////////////////////////////////////////////////////////////////////////////////*/
let formulario_login = document.getElementById('form_3')
let usuario = []

const capturarDatos_regis =() =>{
    let correo = document.getElementById('correo').value
    let contraseña = document.getElementById('contraseña').value


    let ingreso_usuarios = {
        correo,
        contraseña
    }

    usuario.unshift(ingreso_usuarios)
    console.log(usuario);
    getLocalStorage()
}

const getLocalStorage = () =>{
    /*El JSON sirve para que no se guarde como string sino como 
     un array*/
     let usuariosLocalStorage = JSON.parse(localStorage.getItem('Usuarios'))
     console.log(usuariosLocalStorage);
     
    let usuario_existe = 0

    for (let i = 0; i < usuariosLocalStorage.length; i++) {
        if((usuario[0].correo === usuariosLocalStorage[i].correo) && 
        (usuario[0].contraseña === usuariosLocalStorage[i].contraseña)){
            usuario_existe = 1
            break;
        }
        else{
            usuario_existe = 0
        }
    }

    if (usuario_existe === 1) {
        window.alert("Ingreso exitoso");
        window.location.href = "./index.html";
    }
    else{
        window.alert("Correo o contraseña incorrecto(s)");
        location.reload()
    }
   
}
 

formulario_login .addEventListener('submit' , e => {
    e.preventDefault()
    capturarDatos_regis()
    e.target.reset()
    
})
