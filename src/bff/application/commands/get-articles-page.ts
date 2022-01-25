import { Request, Response } from "express";
import { Command } from "../contracts/command";

export class GetArticlesPage implements Command {
  public async handle(_: Request, res: Response): Promise<void> {
    const templatePath = "articles/index";
    const data = {
      metadata: { pageTitle: "Articles" },
    };

    // const articleRepository = new ArticleRepository();
    // const articles = await articleRepository.find();

    // if (articles.isError) {
    //   return res.render(templatePath, { ...data, articles: {} });
    // }

    return res.render(templatePath, {
      ...data,
      articles: {},
    });
  }
}
