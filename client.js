import { io } from "socket.io-client";

const serverUrl = "http://localhost:4000";

const socket = io(serverUrl);

socket.on("connect", () => {
  console.log("Conectando al servidor");

  socket.emit("process", "Datos a procesar");

  socket.on("notifications", (message) => {
    console.log(`Notificacion del servidor: ${message}`);
  });

  //desconectar despues de 10segundos
  setTimeout(() => {
    socket.disconnect();
  }, 10000);
});

socket.on("disconnect", () => {
  console.log("Desconectado del server");
});
