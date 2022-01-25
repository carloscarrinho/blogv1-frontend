import { HttpService } from "../../../application/contracts/http/http-service";

export class BlogService {
  constructor(private readonly httpService: HttpService) {}

  async getArticles(): Promise<unknown> {
    const response = await this.httpService.request({
      method: "GET",
      uri: "http://localhost:3333/articles",
      headers: { "Content-Type": "application/json" },
    });

    if (response.statusCode !== 200) return [];

    return null;
  }
}
