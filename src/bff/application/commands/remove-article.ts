import { Request, Response } from "express";
import { Command } from "../contracts/command";

export class RemoveArticle implements Command {
  public async handle(req: Request, res: Response): Promise<void> {
    const templatePath = "matrix/index";
    const data = { metadata: { pageTitle: "Matrix" } };
    const { id } = req.params;

    // if (result.isError) {
    //   return res.render(templatePath, {
    //     ...data,
    //     articles: articles,
    //     alert: {
    //       show: true,
    //       error: true,
    //       message: result.message,
    //     },
    //   });
    // }

    // if (articles.isError) {
    //   return res.render(templatePath, {
    //     ...data,
    //     articles: {},
    //     alert: {
    //       show: true,
    //       error: true,
    //       message: articles.message,
    //     },
    //   });
    // }

    return res.render(templatePath, {
      ...data,
      articles: {},
      alert: {
        show: true,
        error: false,
        message: "Article successfully removed from database",
      },
    });
  }
}
