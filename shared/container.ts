import "reflect-metadata";
import { container } from 'tsyringe';
import { GaleriaService } from "../services/galeriaService";
import { NewsService } from "../services/newsService";
import { VideosService } from "../services/videosService";

container.register(
  "INewService", {
    useClass: NewsService
  }
);

container.register(
    "IVideosService", {
        useClass: VideosService
    }
);

container.register(
    "IGaleriaService", {
        useClass: GaleriaService
    }
);