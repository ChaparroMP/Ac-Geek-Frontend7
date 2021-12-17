/*Informacion de los planetas*/
const planets_info = [
{
    id: 1,
    PlanetsName: "Mercurio",
    Distance: "0.39",
    Planet_size: "2439",
},
{
    id: 2,
    PlanetsName: "Venus",
    Distance: "0.72",
    Planet_size: "6051",
},
{
    id: 3,
    PlanetsName: "Tierra",
    Distance: "1.00",
    Planet_size: "6378",
},
{
    id: 4,
    PlanetsName: "Marte",
    Distance: "1.52",
    Planet_size: "3394",
},
{
    id: 5,
    PlanetsName: "Júpiter",
    Distance: "5.20",
    Planet_size: "71398",
},
{
    id: 6,
    PlanetsName: "Saturno",
    Distance: "9.54",
    Planet_size: "60000",
},
{
    id: 7,
    PlanetsName: "Urano",
    Distance: "19.19",
    Planet_size: "25400",
},
,
{
    id: 8,
    PlanetsName: "Neptuno",
    Distance: "30.06",
    Planet_size: "24750",
},
{
    id: 9,
    PlanetsName: "Plutón",
    Distance: "39.44",
    Planet_size: "1400",
}
];

/**
 *Referencia de diseño de la tabla: https://platzi.com/tutoriales/1814-basico-javascript/5211-variables-en-javascript/?utm_source=google&utm_medium=cpc&utm_campaign=12915366154&utm_adgroup=&utm_content=&gclid=Cj0KCQiAweaNBhDEARIsAJ5hwbfce1ECUXGm9e7yA5YrvlqFnZe782gROhvyKkTNTp0L-Un9RFrxHicaAlN0EALw_wcB&gclsrc=aw.ds
*/

var boton_presionado=0;

// Ahora dibujamos la tabla
const $bodyTable1 = document.querySelector("#bodyTable1");
// Recorrer todos los campos de planets_info
planets_info.forEach(planet => {
    // Crear un <tr>
    const $tr = document.createElement("tr");
    // Creamos el <td> del # de Planeta y lo adjuntamos a tr
    let $tdNumber = document.createElement("td");
    $tdNumber.textContent = planet.id;
    $tr.appendChild($tdNumber);
    // Creamos el <td> del nombre del planeta y lo adjuntamos a tr
    let $tdName = document.createElement("td");
    $tdName.textContent = planet.PlanetsName; 
    $tr.appendChild($tdName);
    // El td de Dsitancia
    let $tdDistance = document.createElement("td");
    $tdDistance.textContent = planet.Distance;
    $tr.appendChild($tdDistance);
    // El td del tamaño
    let $tdSizePla = document.createElement("td");
    $tdSizePla.textContent = planet.Planet_size;
    $tr.appendChild($tdSizePla);
    // Finalmente agregamos el <tr> al cuerpo de la tabla
    $bodyTable1.appendChild($tr);
    // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
});
