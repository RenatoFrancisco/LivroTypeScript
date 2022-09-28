import "reflect-metadata";
import { container  } from "tsyringe";
import express, { Application, Request, Response } from "express";


import database from "./infra/db";
import './shared/container';

import { NewsController } from "./controller/newsController";
import { VideosController } from "./controller/videosController";
import { GaleriaController } from "./controller/galeriaController"

class Startup {
    public app: Application;
    private _db: database = new database();

    constructor() { 
        this.app = express();
        this._db.createConnection();
        this.routes();
    }

    private news = container.resolve<NewsController>(NewsController);
    private videos = container.resolve<VideosController>(VideosController);
    private galeria = container.resolve<GaleriaController>(GaleriaController);

    routes() {
        /* news */
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.1" });
        });

        this.app.route("/api/v1/news/:page/:qtd").get((req: Request, res: Response) => {
            return this.news.get(req, res);
        });

        this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
            return this.news.getById(req, res);
        });

        /* videos */
        this.app.route("/api/v1/videos/:page/:qtd").get((req: Request, res: Response) => {
            return this.videos.get(req, res);
        });

        this.app.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
            return this.videos.GetById(req, res);
        });

        /* galeria */
        this.app.route("/api/v1/galeria/:page/:qtd").get((req: Request, res: Response) => {
            return this.galeria.get(req, res);
        });

        this.app.route("/api/v1/galeria/:id").get((req: Request, res: Response) => {
            return this.galeria.GetById(req, res);
        });
    }
}

export default new Startup();