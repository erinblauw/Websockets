var socket = io();

socket.on('connect', () => {
    console.log('connected to server');
});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});

socket.on('newMessage', message => {
   console.log('New Message', message);
});

// socket.on('notifyUsersOfNewUser', () => {
//     console.log('A new user has joined!')
// });
//
// socket.on('welcomingUserByAdmin', () => {
//     console.log('Welcome user!')
// });
