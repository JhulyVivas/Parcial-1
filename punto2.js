class Stack {
    constructor() {
        this.items = [];
    }
    push(value) {
        this.items.push(value);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

function invertirPila(pila){
    const pilaInvertida = new Stack();
    while (!pila.isEmpty()) {
        const elemento = pila.pop();
        pilaInvertida.push(elemento);
    }

    return pilaInvertida;
}

const pila = new Stack();
pila.push(15.8);
pila.push(0.2);
pila.push(30.4);
pila.push(4.5);
pila.push(10.2);
pila.push(3.5);

console.log("Pila inicial:");
console.log(pila.items);

const pilaInvertida = invertirPila(pila);

console.log("Pila invertida:");
console.log(pilaInvertida.items);

