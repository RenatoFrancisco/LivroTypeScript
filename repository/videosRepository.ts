import mongoose, { mongo } from "mongoose";
import { Videos } from "../models/videos";

const VideoSchema = new mongoose.Schema<Videos>({
    titulo: { String },
    texto: { String },
    imagem: { String },
    duracao: { String },
    link: { String },
    url: { String },
    dataPublicacao: { Date },
    tags: { String },
    ativo: { Boolean }
});

export const VideosRepository = mongoose.model<Videos>("videos", VideoSchema);