import { Worker } from "worker_threads";

//ruta archivo cliente
const clientFilePath = "./client.js";

//hilos
for (let counter = 0; counter < 4; counter++) {
  const worker = new Worker(clientFilePath);
}
