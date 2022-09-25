import mongoose from "mongoose";
import { News } from "../models/news";

const NewsSchema = new mongoose.Schema<News>({
    titulo: { Type: String },
    chapeu: { Type: String },
    texto: { Type: String },
    autor: { Type: String },
    imagem: { Type: String },
    dataPublicacao: { Type: Date },
    tags: { type: String },
    link: { type: String },
    ativo: { type: String },
});

export const NewsRepository = mongoose.model<News>("news", NewsSchema);
