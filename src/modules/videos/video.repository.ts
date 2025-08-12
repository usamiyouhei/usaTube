import api from "../../lib/api";
import { Video } from "./video.entity";

type CreateParams = {
  video: File;
  thumbnail: File;
  title: string;
  description: string;
  isPublic: boolean;
}

// export const videoRepository = {
//   async create(params: CreateParams): Promise<Video>{
//     const result = await api.postForm("/videos", params);
//     return new Video(result.data);
//   }

export const videoRepository = {
  async create(params: CreateParams): Promise<Video> {
    const fd = new FormData();
    // ↓サーバーが期待しているフィールド名に合わせる（例）
    fd.append("video", params.video);             // upload.fields([{ name: 'video' }]) と対応
    fd.append("thumbnail", params.thumbnail);     // 同上
    fd.append("title", params.title);
    fd.append("description", params.description);
    fd.append("isPublic", String(params.isPublic)); // ← multipart だと文字列になる

    const result = await api.post("/videos", fd); // ヘッダは axios/ブラウザが自動付与
    return new Video(result.data);
  },
}