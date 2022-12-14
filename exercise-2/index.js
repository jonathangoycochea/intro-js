const cellphone = {
    brand: 'Samsung',
    color: 'blue',
    price: 19_000,
    creation_date: 2020,
};

// Mostrar (en un console log) el valor de la key precio de dicho objeto.
console.log(cellphone.price, '\n')

// Insertar la key stock con el valor true .
cellphone.stock = true

// Modificar el valor de la llave anio_creacion 2017.
cellphone["creation_date"] = 2017

// Eliminar la key marca.
delete cellphone.brand

// Imprimir todas las llaves del hash almacenado en la variable celular con su respectivo valor.
const keys = Object.keys(cellphone)

keys.forEach(key => {
        console.log(cellphone[key])
    }
)

// 2. Crear un arreglo con los siguientes valores 1, 2, 3 y 4. Almacenarlo en una constante llamada arreglo.
const array = [1, 2, 3, 4]

// Crear una variable (LET) llamada arreglo_dos, la cual necesito que tengan lo que tiene la constante arreglo más el número 5.
let array_two = [...array, 5]

console.log('\n', array_two)

/*  En una constante, llamada arreglo_tres, asignar un array generado usando map con cada uno de los valores
    multiplicados por cinco(5) del arreglo_dos. */

const array_three = array_two.map(function (num) {
    return num * 5
})

console.log('\n', array_three)

// 3. A partir del siguiente objeto :

const person = {
    name: 'Pepe',
    age: 26,
    hobbies: ['chess', 'running', 'basket']
}

/* Realizar un destructuring de dos de las tres propiedades usando un alias para cada uno. Usemos nombre para name, edad
 para age y para hobbies no usemos. */

const {name: nombre, age: edad} = person;

console.log('\n', nombre, edad)