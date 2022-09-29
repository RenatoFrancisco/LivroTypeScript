import "reflect-metadata";
import express, { Application } from "express";

import database from "./infra/db";
import './shared/container';
import './shared/container';
import newsRouter from "./router/newsRouter";
import videosRouter from "./router/videosRouter";
import galeriaRouter from "./router/galeriaRouter";

class Startup {
    public app: Application;
    private _db: database = new database();

    constructor() { 
        this.app = express();
        this._db.createConnection();
        this.routes();
    }

    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.1" });
        });

        this.app.use("/", newsRouter);
        this.app.use("/", videosRouter);
        this.app.use("/", galeriaRouter);
    }
}

export default new Startup();