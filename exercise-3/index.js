/* 1.
Descargar file con un array de objetos con heroes
Importarlo desde el archivo index.js. Crear una array function asignada a una constante, con el nombre de getHeroeByIdAsync
que reciba como parámetro el Id del héroe.
En getHeroeByIdAsync deberían retornar una promise, la cual utilize una función que busque el héroe por ID
Debe resolver sí lo encuentra correctamente, o reject sí no lo hizo.
Cómo último paso, llamar a getHeroeByIdAsync pasarle un id (ejemplo 1) e imprimir la respuesta del then y del catch.}
 */

import heroes from "./heroes.js";

const getHeroeByIdAsync = id => new Promise((resolve, reject) => {
    const getHeroeById = heroes.find(heroe => heroe.id === id);
    if (getHeroeById) {
        resolve(`The heroe with ID ${id} was found.`);
    }
    reject(new Error(`The heroe with ID ${id} was not found.`));
});

/* Nota:
While loop para poder testear y printear las respuestas del then o catch cuando se llama a getHeroeByIdAsync una N cantidad
de veces (cycleCount)
*/

const testGetHeroeByIdAsync = cycleCount => {
    let n = 1;
    while (n <= cycleCount) {
        getHeroeByIdAsync(n)
            .then(resolve => {
                console.log(resolve, `\n`);
            })
            .catch(error => {
                console.log(error, `\n`);
            });
        n++
    }

}

testGetHeroeByIdAsync(7)

/* 2.
El segundo ejercicio se va a utilizar la function fetch de JS para hacer una petición a https://api.github.com/users/manishmshiva.
En el primer then pasamos el resultado obtenido a una función anónima que formatea la respuesta como JSON pasando la respuesta al segundo then.
El segundo then debe mostrar el código JSON por la consola. Y en el catch deberìan capturar errores.
 */

/* Nota:
Leyendo la documentacion del fetch, veo que al manejar los errores va a obtener un reject solo cuando haya un problema en la red.
Es decir, que los errores 4XX O 5XX van a ser resueltos de forma normal y no van a entrar al bloque de catch.
Buscando alguna forma de hacer un manejo de errores apropiado, encontre el metodo de fetch ok() que indica si el estado HTTP esta
en el rango 200 a 299, lo cual seria valido, y, en caso contrario, poder manejar el error de forma manual.
Hay dos constantes, una llamada urlRequest que contiene la url original donde hacemos la peticion, y otra llamda urlError, que es una url
que retorna el estado 404, como para probar si podia manejar un caso concreto.
 */

const urlRequest = 'https://api.github.com/users/manishmshiva'
const urlError = `https://httpstat.us/404`

const checkFetchErrorResponse = response => {
    if (!response.ok) {
        const errorMessage = `Invalid request "${response.status} ${response.statusText}"`
        throw new Error(errorMessage)
    }
    return response.json()
}

fetch(urlRequest)
    .then(checkFetchErrorResponse)
    .then(result => console.log(result, `\n`))
    .catch(error => console.log(error));


/* 3.
Cómo último ejercicio, crean una nueva array function llamada getName, en la cual van a usar async/await propiedades (adjunto documentación).
Basicamente, van a realizar, nuevamente, una llamada con fetch y await a la misma url que el ejercicio anterior, pero esta vez usando el await
en esa petición. El objetivo es printear la property name de dicho objeto.
Sería buena práctica que engloben esta petición con await, dentro de un try /catch para el manejo de posibles errores.
 */

/* Nota:
Idem inciso anterior
 */

const getName = async url => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            const errorMessage = `Invalid request "${response.status} ${response.statusText}"`
            throw new Error(errorMessage)
        }
        const result = await response.json()
        console.log(Object.getOwnPropertyNames(result))
    } catch (error) {
        console.log(error)
    }
}
getName(urlRequest)
