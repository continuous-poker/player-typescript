import express, { Express, Request, Response } from 'express';
import {decide} from "./logic/strategy";
import {Bet, Table} from "./models";
import bodyParser from "body-parser";

const app: Express = express();
const port = 8000;

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Poker Typescript Player');
});

app.post('/', (req: Request, res: Response) => {
    let bet: Bet = decide(req.body as Table);
    res.json(bet);
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});