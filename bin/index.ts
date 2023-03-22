import { Request, Response } from "express";
import { servePublic } from "../src/servePublic.js";
import express from "express";

/**
 * An example to get an instant public URL for your express app.
 *
 * Heavily based on the Hello World example from https://expressjs.com/en/starter/hello-world.html
 */
const app = express();

app.get("/", (request: Request, response: Response) => {
    response.send("Hello World!");
});

servePublic(
    app, 
    { 
        port: 3000,
        
    }, () => {
        console.log(`Example app listening on port 3000`);
    }
);
