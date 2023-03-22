import { Application } from "express";
import { tunnelmole } from "tunnelmole";
import { Options } from "tunnelmole/dist/src/options";

/**
 * @param app the express application from express()
 * @param options {port: number, domain: string}. Domain is optional if you want to use a custom Tunnelmole subdomain
 * @param callback the callback you would have otherwise passed to app.listen()
 */
const servePublic = (app: Application, options: Options, callback: any) => {
    if (!callback) {
        callback = () => {};
    }

    const { port } = options;
    app.listen(port, callback);
    
    tunnelmole(options);
}

export { servePublic }