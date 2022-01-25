import { Request, Response } from "express";
import { Command } from "../contracts/command";

export class GetArticlePage implements Command {
  public async handle(req: Request, res: Response): Promise<void> {
    // const { id } = req.params;
    const templatePath = "articles/article-page";
    const data = {
      metadata: { pageTitle: "New Article" },
    };

    // if (article.isError) {
    //   return res.redirect("/");
    // }

    return res.render(templatePath, {
      ...data,
      article: {},
    });
  }
}
