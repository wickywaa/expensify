// console.log('hello')

// const person ={
//     name:'Gav',
//     age:'33',
//     location:{
//         city:'Berlin',
//         temp:'20'
//     }
// }


// const {name:firstName = 'ananoymous',age} = person;
// const {city,temp} = person.location;



// console.log(`${firstName } is ${age} `)


// // console.log(`it's ${temp } degrees in ${city}`)


// const book ={

//     title:'ego is the enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'penguin'
//     }

// }

// const {name:publisherName='unknown'} = book.publisher;


// console.log(publisherName)



// array destrctor



const address = ['storkower strasse 89 ','Berlin','Germany',10409]

const [,city,country,] = address;


console.log(`your are in ${city} ${country}`)



const item = ['Coffee(hot)',2,2.50,2.75]


const [itemName,smallPrice,mediumPrice,largePrice] = item;


console.log(`small ${itemName} costs ${smallPrice} euro`)