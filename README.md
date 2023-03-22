## Instant Public URLs for express
`express-serve-public` will generate an instant public URL for your express application. This URL will work behind firewalls and will connect to your local machine via a tunnel. You don't need any special networking config or setup. It will work behind NAT and CG-NAT.

Behind the scenes, this uses [Tunnelmole](https://github.com/robbie-cahill/tunnelmole-client) (an open source `ngrok` alternative) to get the public URLs.

### Installation
Add `express-serve-public` to your project with `npm`
```
npm install --save express-serve-public
```

### Usage

#### First, import the module
First you'll need to import the `servePublic` module. Both ES and CommonJS style imports are supported.

ES style import:
```js
import { servePublic } from 'express-serve-public`;
```

CommonJS style import:
```js
const servePublic = require('express-serve-public/cjs');
```

### Serve your express application with a public URL
Here is a full example express application which will generate a randomized public URL at launch
```js
// app.js
import { Request, Response } from "express";
import { servePublic } from "../src/servePublic.js";
import express from "express";

/**
 * An example to get an instant public URL for your express app.
 *
 * Heavily based on the Hello World example from https://expressjs.com/en/starter/hello-world.html
 */
const app = express();

app.get("/", (request, response) => {
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
```

If your project is using CommonJS, here is a CommonJS example: https://github.com/robbie-cahill/express-serve-public/blob/main/cjs/express-serve-public.js.

When this application runs, you should see output similar to the following:
```
Example app listening on port 3000
http://kqr4cc-ip-157-211-195-169.tunnelmole.com is forwarding to localhost:3000
https://kqr4cc-ip-157-211-195-169.tunnelmole.com is forwarding to localhost:3000
```

The express application has started and is listening on port 3000. Tunnelmole has generated a public URL that is pointing to your express application.

Try hitting one of these URLs from any device on the internet and like magic they will connect to your locally running express server.

Well not exactly magic, [heres how it works](https://github.com/robbie-cahill/tunnelmole-client/blob/main/docs/img/how-tunnelmole-works.png).

### Custom subdomains
Sometimes, it can be useful to have a URL that does not change and for that, Tunnelmole supports custom subdomains.

To get a URL that does not change, pass in the `domain` option to `servePublic` as follows:
```
servePublic(
    app, 
    { 
        port: 3000,
        domain: '<yourdomain>.tunnelmole.com`
    }, () => {
        console.log(`Example app listening on port 3000`);
    }
);
```

If you are using the hosted service (which is the default) and you want to use a custom subdomain you'll need to purchase a subscription [Learn More](https://dashboard.tunnelmole.com/?utm_source=expressServePublicNPM).

Otherwise, you can self host as the service is also open source so nothing prevents you from running your own server, no subscriptions needed. To learn more about this option go to the [Tunnelmole Service](https://github.com/robbie-cahill/tunnelmole-service/) GitHub repo.

### Get a public URL for other things
Tunnelmole is available as a standalone CLI application (`npm install -g tunnelmole`) and as an NPM dependency for use with other projects such as React for example. Get it from (https://github.com/robbie-cahill/tunnelmole-client).

This project uses the dependency to give you a nice wrapper function to use with `express`.