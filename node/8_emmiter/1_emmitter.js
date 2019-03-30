const EventEmmitter = require('events');

const myEmmitter = new EventEmmitter();

myEmmitter.on('Event_Test', () => {

    console.log('Event 1 fire');
});

myEmmitter.on('Event_Test', () => {

    console.log('Event 2 fire');
});

myEmmitter.on('Event_Test', () => {

    console.log('Event 2 fire');
});

myEmmitter.emit('Event_Test');