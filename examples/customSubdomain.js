/**
 * An example to get an instant public URL with a custom subdomain for your express app.
 *
 * Heavily based on the Hello World example from https://expressjs.com/en/starter/hello-world.html
 */
import { servePublic } from "express-serve-public";
import express from "express";

const app = express();

app.get("/", (request, response) => {
    response.send("Hello World!");
});

servePublic(app, {
    port: 3000,
    domain: 'myapp.tunnelmole.com'
}, () => {
    console.log(`Example app listening on port 3000`);
});