class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

function ordenarListas(lista1, lista2) {
    const listaOrdenada = new LinkedList();

    function listasOrdenadas(node1, node2) {
        if (!node1 && !node2) {
            return;
        }

        if (!node1 || (node2 && node1.value > node2.value)) {
            listaOrdenada.append(new Node(node2.value));
            listasOrdenadas(node1, node2.next);
        } else {
            listaOrdenada.append(new Node(node1.value));
            listasOrdenadas(node1.next, node2);
        }
    }

    listasOrdenadas(lista1.head, lista2.head);

    return listaOrdenada;
}


const lista1 = new LinkedList();
lista1.append(new Node(1));
lista1.append(new Node(15));
lista1.append(new Node(20));

const lista2 = new LinkedList();
lista2.append(new Node(5));
lista2.append(new Node(10));
lista2.append(new Node(25));

const listaOrdenada = ordenarListas(lista1, lista2);

listaOrdenada.print();
