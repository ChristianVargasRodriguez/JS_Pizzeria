function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

var pizza1 = pizzaOven("Estilo Chicago", "Tradicional", ["Mozzarella"], ["Pepperoni", "Salchicha"]);
var pizza2 = pizzaOven("Lanzada a mano", "Marinara", ["Mozzarella", "Feta"], ["Champiñones", "Aceitunas", "Cebollas"]);
var pizza3 = pizzaOven("Estilo New York", "Barbacoa", ["Parmesano", "Mozzarella"], ["Pepperoni", "Pollo"]);
var pizza4 = pizzaOven("Napolitana", "Pesto", ["Chedar"], ["Tomate cherry", "Albaca"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

console.log("-------------------------------");
function randomPizzaOven() {
    // Definir posibles valores para cada propiedad
    var tiposCorteza = ["Estilo Chicago", "Lanzada a mano", "Estilo New York", "Napolitana"];
    var tiposSalsa = ["Tradicional", "Marinara", "Barbacoa", "Pesto"];
    var quesos = ["Mozzarella", "Feta"];
    var ingredientes = ["Pepperoni", "Salchicha", "Champiñones", "Aceitunas", "Cebollas", "Pollo", "Carne", "Tomate cherry", "Albaca"];
    
    // Seleccionar aleatoriamente un valor de cada categoría
    var tipoCorteza = tiposCorteza[Math.floor(Math.random() * tiposCorteza.length)];
    var tipoSalsa = tiposSalsa[Math.floor(Math.random() * tiposSalsa.length)];
    var queso1 = quesos[Math.floor(Math.random() * quesos.length)];
    var queso2 = quesos[Math.floor(Math.random() * quesos.length)];
    while (queso1 === queso2) {
        queso1 = quesos[Math.floor(Math.random() * quesos.length)];
        queso2 = quesos[Math.floor(Math.random() * quesos.length)];
    }
    var ingrediente1 = ingredientes[Math.floor(Math.random() * ingredientes.length)];
    var ingrediente2 = ingredientes[Math.floor(Math.random() * ingredientes.length)];
    while (ingrediente1 === ingrediente2) {
        ingrediente1 = ingredientes[Math.floor(Math.random() * ingredientes.length)];
        ingrediente2 = ingredientes[Math.floor(Math.random() * ingredientes.length)];
    }

    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.dobleQueso = [queso1, queso2];
    pizza.dosIngredientes = [ingrediente1, ingrediente2];
    return pizza;
}

console.log(randomPizzaOven());
console.log(randomPizzaOven());
console.log(randomPizzaOven());