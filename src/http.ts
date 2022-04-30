import "reflect-metadata"
import express from 'express'
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://localhost:27017/socket")

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
})

export { server, io };