// async code example using event emitter

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Asynchronous function f1
function f1(params) {
    console.log('f1 start', params);

    // Register an event listener for 'f1Done'
    eventEmitter.once('f1Done', () => {
        console.log('f1 done');
    });

    // Simulate async work with setTimeout
    setTimeout(() => {
        eventEmitter.emit('f1Done');
    }, 5000);

    return;
}

// Asynchronous function f2
function f2(params) {
    console.log('f2 start', params);
    console.log('f2 done');
    return;
}

// Execute functions f1 and f2
f1('a'); // f1 will start and complete after 5 seconds
f2('b'); // f2 will start immediately after f1 starts
