import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.static('src/client/build'));

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
