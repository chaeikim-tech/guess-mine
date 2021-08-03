import events from './events';

const socketController = (socket) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data);
    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        broadcast.emit(events.newUser, { nickname });
    });

    socket.on(events.disconnect, () => {
        broadcast(events.disconnected, { nickname: socket.nicname });
  ;  })
};

export default socketController;