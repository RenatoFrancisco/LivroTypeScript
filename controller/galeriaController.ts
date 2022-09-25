import { Request,  Response } from "express";
import { GaleriaService } from "../services/galeriaService";

class GaleriaController {

    private _service: GaleriaService;

    constructor() {
        this._service = new GaleriaService();
    }

    async get(request: Request, response: Response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
            let result =  await this._service.getAll(page, qtd);
            response.status(200).json({ result });
        } catch (error: any) {
            response.status(500).json({ error: error.message } || { error: error.toString() });
        }
    }

    async GetById(request: Request, response: Response) {
        try {
            const id = request.params.id;
            let result = await this._service.get(id);
            response.status(200).json({ result });
        } catch (error: any) {
            response.status(500).json({ error: error.message } || { error: error.toString() });
        }
    }
}

export default new GaleriaController();