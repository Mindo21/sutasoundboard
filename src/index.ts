import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

app.get("/", (req: Request, res: Response) => {
    res.send("YEYEEEE");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
