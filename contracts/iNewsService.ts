import { News } from "../models/news";
import { IService } from "./iService";

/**
* Contrato INewsService
* @summary esse contrato implementa a interface IService passand
o a model de News
*/
export interface INewsService extends IService<News> { }