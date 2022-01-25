import { HttpService } from "../../../application/contracts/http/http-service";

export class BlogService {
  constructor(private readonly httpService: HttpService) {}

  async getArticles(): Promise<unknown> {
    await this.httpService.request({
      method: "GET",
      uri: "http://localhost:3333/articles",
      headers: { "Content-Type": "application/json" },
    });

    return [];
  }
}
