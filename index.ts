import dotenv from 'dotenv';
import express, {json} from "express";
import {AppDataSource} from "./src/configuration/data-source";
import {api} from "./src/api/api";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

AppDataSource.initialize().then(() => {
    console.log('Connect Database Success!');
});

app.use(api);
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running: ${process.env.SERVER_URL}`);
});