import { INewsService } from "../contracts/iNewsService";
import { Result } from "../infra/result";
import { NewsRepository } from "../repository/newRepository";

export class NewsService implements INewsService {
    async get(id: string) {
        let result = await NewsRepository.findById(id);
        return result;
    }

    async getAll(page: number, qtd: number): Promise<Result> {
        let result = new Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await NewsRepository.count({});
        result.Data = await NewsRepository
            .find({})
            .skip((page * qtd) - qtd)
            .limit(qtd);
        
            return result;
    }
}