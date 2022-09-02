let amigos = ["Luis", "Milena", "Pepe", "Pedro", "Gustavo", "João","Maria", "Marcos", "Theo", "Tom"];

//Looping com o amigos.
for ( i = 0; i < amigos.length; i++ ) {

    console.log(`Amigos: ${i}`); // <- Template String
}

// Foreach For = para , each = cada
amigos.forEach(function(valor, indice) {

    console.log(`${indice}: ${valor}`);
});

//Igual o Foreach
amigos.map(function(val){

    console.log(val);
});

