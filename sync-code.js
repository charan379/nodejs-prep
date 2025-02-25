// sync code example

// Function to simulate a blocking sleep
function sleep(ms) {
    const date = new Date().getTime();
    while (new Date().getTime() - date < ms) { } // Busy-wait for the specified time
};

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Synchronous function f1
function f1() {
    // Start of f1
    console.log('f1');

    // Register an event listener for 'f1Done'
    eventEmitter.once('f1Done', () => {
        console.log('f1 done');
    });

    // This task will take 5 seconds to complete and will block the main thread
    sleep(5000);

    // Emit the 'f1Done' event after the sleep
    eventEmitter.emit('f1Done');
}

// This function will be called after f1 is done
function f2() {
    console.log('f2');
    console.log("f2 done");
    return;
};

// Execute functions f1 and f2 sequentially
f1(); 
f2();