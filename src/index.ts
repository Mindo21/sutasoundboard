import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import { Server } from "socket.io"

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}

interface InterServerEvents {
    ping: () => void;
}

interface SocketData {
    name: string;
    age: number;
}

dotenv.config();

const app: Express = express();
app.use(express.static('src/client/build'));
app.use(cors());

const server = http.createServer(app);
const port = process.env.PORT || 3001;

const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>( server, {
    cors: {
        origin: `http://localhost:3000`
    }
});

io.on('connection', (socket) => {
    console.log('a user connected: ', socket.id);
});

server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
