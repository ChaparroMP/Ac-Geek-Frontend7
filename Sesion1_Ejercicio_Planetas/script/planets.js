let nombrePlanetas = Array('Mercurio', 'Venus', 'Tierra', 'Marte','Júpiter','Saturno','Neptuno', 'Plutón')
let distancia = [0.39 , 0.72 , 1.00, 1.52, 5.20, 9.54, 19.19, 30.06, 39.44]
const tamaño = [2439, 6051, 6378, 3394, 71398, 60000, 25400, 24750, 1400]

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

let i=0
while(i <= nombrePlanetas.length -1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i=i+1
}

//Ciclo for
for(let index = 0; index < nombrePlanetas.length; index++){
    console.log(nombrePlanetas[index])
}

//Ciclo for In
for (const key in object){
    if(Object.hasOwnProperty.call(object,key)){
        const element = object[key];
    }
}
