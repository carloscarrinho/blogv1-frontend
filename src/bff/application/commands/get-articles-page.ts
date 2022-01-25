import { Request, Response } from "express";
import { BlogService } from "../../infrastructure/services/blog-service/blog-service";
import { AxiosAdapter } from "../../infrastructure/services/http-service/axios-adapter";
import { Command } from "../contracts/command";

export class GetArticlesPage implements Command {
  public async handle(_: Request, res: Response): Promise<void> {
    const templatePath = "articles/index";
    const data = {
      metadata: { pageTitle: "Articles" },
    };

    const httpService = new BlogService(new AxiosAdapter());
    const articles = await httpService.getArticles();

    if (!articles.length) {
      return res.render(templatePath, { ...data, articles: {} });
    }

    return res.render(templatePath, {
      ...data,
      articles: articles,
    });
  }
}
