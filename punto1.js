class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

const inicialQueue = [4.8, 10.5, 20.5, 8.3, 0.5, 15.5];

console.log("Cola inicial:", inicialQueue);

function invertirNumeros(queue) {
    if (queue.isEmpty()) {
        return new Queue();
    }

    const element = queue.dequeue();
    const invertidaQueue = invertirNumeros(queue);
    invertidaQueue.enqueue(element);

    return invertidaQueue;
}

const initialQueueInstance = new Queue();
inicialQueue.forEach(element => initialQueueInstance.enqueue(element));

const nuevaCola = invertirNumeros(initialQueueInstance);

console.log("Cola invertida:");
console.log(nuevaCola.queue);