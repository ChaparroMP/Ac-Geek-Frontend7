
/* //////////////////////////////////////////////////////////////////////////////////////////*/
/*                               FORMULARIO DE AGENDAR CITA
/*//////////////////////////////////////////////////////////////////////////////////////////*/
let formulario = document.getElementById('form_1')
// También se puede con querySelector

let listarCita = document.getElementById('listarCita')
let buscar = document.getElementById('btnBuscar')
let busqueda = document.getElementById('busqueda')


let citas =JSON.parse(localStorage.getItem('Citas')) || []


const capturarDatos =() =>{
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value
    let sintomas = document.getElementById('sintomas').value


    let registro ={
        nombre,
        fecha,
        hora,
        sintomas
    }

    citas.unshift(registro)
    //Guardar informarción en Almacenamiento Local
    localStorage.setItem('Citas', JSON.stringify(citas))
    getLocalStorage()
}

const getLocalStorage = () =>{
    /*Borrar la información de la tabla en el HTML*/
    listarCita.innerHTML = ''

    /*El JSON sirve para que no se guarde como string sino como 
    un array*/
    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'))
    console.log(citasLocalStorage);

    /*Cuando hay un array y no se sabe si la propiedad existe con el "?" 
    se puede solucionar*/
    citasLocalStorage?.map(cita => {
        const {nombre, fecha, hora, sintomas} = cita
        listarCita.innerHTML+= `
            <tr>
                <td>${nombre}</td>
                <td>${fecha}</td>
                <td>${hora}</td>
                <td>${sintomas}</td>
            </tr>
        `;
    })
}

//Cuando la página se recarge
document.addEventListener('DOMContentLoaded', getLocalStorage)

buscar.addEventListener('click', e =>{
    e.preventDefault()
    let input = document.getElementById('inputBuscar').value
    let data = JSON.parse(localStorage.getItem('Citas'))
    /*Recorre todo el array de "data" y va a buscar si alguno 
    se parece*/
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())

    busqueda.innerText = ''
    //console.log(filtro)

    filtro.length === 0 
        ?
        busqueda.innerHTML += `
            <div style = "color:white">El nombre "${input}" no existe</div>
        `
        :

        filtro.map(cita => {
            const {nombre, fecha, hora, sintomas} = cita
            busqueda.innerHTML += `
                <div style = "color:white">${nombre}</div>
                <div style = "color:white">${fecha}</div>
                <div style = "color:white">${hora}</div>
                <div style = "color:white">${sintomas}</div> 
                <button class= "Clear_date_${fecha}">Borrar </button>
                <br>
             `;

        })

    let borrar_cita =[]
    for (let i = 0; i < filtro.length; i++) {
        borrar_cita[i]= document.querySelector('.Clear_date_'+ filtro[i].fecha)
        console.log(borrar_cita[i]);
        borrar_cita[i].addEventListener('click', e =>{
            console.log(filtro[i]);
            citas.forEach(function(citas, index, object) {
                if(citas.fecha === filtro[i].fecha){
                     object.splice(index, 1);
                     console.log(citas);
                }
            })
            //Guardar informarción en Almacenamiento Local
            localStorage.setItem('Citas', JSON.stringify(citas))
            location.reload()
        }) 
    }

})

formulario.addEventListener('submit' , e => {
    e.preventDefault()
    capturarDatos()
    /*Limpia los inputs que se han escrito en el formulario al
    darle "submit"*/
    e.target.reset()
})
